import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "@/components/Landing";
import { ModuleSection } from "@/components/ModuleSection";
import { ZigDivider } from "@/components/brand";
import { modules } from "@/data/curriculum";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Handle hash scrolling from other pages
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [location.hash]);

  const filteredModules = useMemo(() => {
    if (!searchQuery) return modules;
    const q = searchQuery.toLowerCase();
    return modules
      .map((m) => ({
        ...m,
        lessons: m.lessons.filter(
          (l) =>
            l.title.toLowerCase().includes(q) ||
            l.notes?.toLowerCase().includes(q) ||
            m.title.toLowerCase().includes(q)
        ),
      }))
      .filter((m) => m.lessons.length > 0);
  }, [searchQuery]);

  return (
    <>
      <HeroSection />

      {/* Curriculum Divider */}
      <div className="my-6">
        <ZigDivider label="Full Curriculum" width={420} />
      </div>

      {/* Module Sections */}
      {filteredModules.map((module, i) => (
        <ModuleSection key={module.id} module={module} index={i} />
      ))}

      {/* No results */}
      {searchQuery && filteredModules.length === 0 && (
        <div className="grid-card p-8 text-center">
          <p className="text-xs text-text-muted">
            No lessons found for &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-8 pt-4 pb-8 text-center">
        <p className="text-[11px] text-text-dim">
          Content gets updated with time.
        </p>
      </footer>
    </>
  );
}
