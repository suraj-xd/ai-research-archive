import { Menu, X, Sun, Moon, Brain } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Header({
  onToggleSidebar,
  sidebarOpen,
  isDark,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 bg-bg/90 backdrop-blur-sm border-b border-border flex items-center px-4 gap-3">
      <button
        onClick={onToggleSidebar}
        className="lg:hidden p-1.5 hover:bg-bg-hover transition-colors"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      <Link to="/" className="flex items-center gap-2 flex-1">
        <Brain size={16} className="text-text-muted" />
        <span className="text-xs font-medium tracking-wide uppercase text-text-muted">
          Become AI Researcher
        </span>
      </Link>

      <div className="flex items-center gap-2">
        <button
          onClick={onToggleTheme}
          className="p-1.5 hover:bg-bg-hover transition-colors text-text-muted"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </header>
  );
}
