import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { PhIcon } from "@/components/brand";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--ga-bg)",
        color: "var(--ga-fg1)",
      }}
    >
      <Header
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex">
        <Sidebar
          scrollProgress={scrollProgress}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main
          className="flex-1 min-w-0"
          style={{ minHeight: "calc(100vh - 55px)" }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: 960,
              padding: "32px 24px 80px",
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>

      {scrollProgress > 10 && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed inline-flex items-center justify-center transition-all"
          style={{
            bottom: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: 999,
            background: "var(--ga-surface)",
            border: "1px solid var(--ga-border)",
            boxShadow: "var(--ga-shadow-md)",
            color: "var(--ga-fg2)",
            zIndex: 30,
            cursor: "pointer",
          }}
          aria-label="Back to top"
        >
          <PhIcon name="arrow-up" size={14} color="var(--ga-fg2)" />
        </button>
      )}
    </div>
  );
}
