import { useState, useEffect, useCallback, useRef } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const calculateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setActiveId(visible[0].target.id);
          }, 100);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      requestAnimationFrame(calculateProgress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    calculateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [ids, calculateProgress]);

  return { activeId, scrollProgress };
}
