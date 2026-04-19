// Refactored to General Agents brand — 2026-04-19
import { useState } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import { blogs } from "@/data/blogs";
import { getFaviconUrl, getPreviewUrl } from "@/utils/previews";

type Filter = "all" | "individual" | "organization";

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

export default function BlogsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? blogs : blogs.filter((b) => b.type === filter);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "individual", label: "Individual" },
    { id: "organization", label: "Organization" },
  ];

  return (
    <section className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Blogs" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          ML/AI Blogs
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {blogs.length} blogs to follow — researchers, engineers, and labs
          sharing insights, tutorials, and papers worth reading.
        </p>
      </div>

      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
              filter === f.id
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {f.label}
            <span className="text-[10px] text-text-dim">
              {f.id === "all"
                ? blogs.length
                : blogs.filter((b) => b.type === f.id).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((blog) => {
          const preview = getPreviewUrl(blog.url);
          return (
            <a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid-card group flex flex-col overflow-hidden relative"
            >
              {preview && (
                <div className="aspect-[2/1] w-full overflow-hidden bg-bg">
                  <img
                    src={preview}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="p-3 flex items-start gap-2">
                <img
                  src={getFaviconUrl(blog.url)}
                  alt=""
                  className="w-4 h-4 mt-0.5 shrink-0"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-foreground transition-colors truncate block">
                    {blog.name}
                  </span>
                </div>
                <span className={`${NEUTRAL_CHIP} shrink-0`}>
                  {blog.type === "individual" ? "PERSON" : "ORG"}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
