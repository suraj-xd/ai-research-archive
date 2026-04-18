import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ArrowUp } from "lucide-react";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  // Track scroll progress per page
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  // Handle hash-based scrolling (for curriculum links)
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-bg">
      <Header
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      <Sidebar
        scrollProgress={scrollProgress}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="pt-20 lg:pl-60 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Outlet />
        </div>
      </main>

      {scrollProgress > 10 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-bg-card border border-border hover:border-border-hover transition-all z-30"
          aria-label="Back to top"
        >
          <ArrowUp size={14} className="text-text-muted" />
        </button>
      )}
    </div>
  );
}
