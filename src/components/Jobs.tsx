// Refactored to General Agents brand — 2026-04-19
import { useState, useEffect } from "react";
import { PhIcon, ZigDivider } from "@/components/brand";
import { fetchJobs, jobFilterLabels, type Job, type JobFilter } from "@/data/jobs";

const NEUTRAL_CHIP =
  "inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] uppercase tracking-wider font-mono";

// Country detection from location string → ISO 3166-1 alpha-2 code
// flagcdn.com serves free flag PNGs/SVGs from country codes
const COUNTRY_MAP: Record<string, string> = {
  // Indian states/cities
  "karnataka": "in", "telangana": "in", "maharashtra": "in", "tamil nadu": "in",
  "delhi": "in", "haryana": "in", "uttar pradesh": "in", "kerala": "in",
  "west bengal": "in", "rajasthan": "in", "gujarat": "in", "andhra pradesh": "in",
  "punjab": "in", "madhya pradesh": "in", "odisha": "in",
  "bangalore": "in", "bengaluru": "in", "hyderabad": "in", "mumbai": "in",
  "pune": "in", "chennai": "in", "noida": "in", "gurgaon": "in", "gurugram": "in",
  "kolkata": "in", "ahmedabad": "in", "jaipur": "in", "coimbatore": "in",
  "kochi": "in", "thiruvananthapuram": "in", "indore": "in", "chandigarh": "in",
  "india": "in",
  // US
  "united states": "us", "usa": "us", "california": "us", "new york": "us",
  "texas": "us", "washington": "us", "san francisco": "us", "seattle": "us",
  "austin": "us", "boston": "us", "chicago": "us", "los angeles": "us",
  "denver": "us", "atlanta": "us", "miami": "us",
  // UK
  "united kingdom": "gb", "london": "gb", "england": "gb", "uk": "gb",
  // Europe
  "germany": "de", "berlin": "de", "munich": "de", "frankfurt": "de",
  "france": "fr", "paris": "fr",
  "netherlands": "nl", "amsterdam": "nl",
  "spain": "es", "barcelona": "es", "madrid": "es",
  "italy": "it", "switzerland": "ch", "zurich": "ch",
  "ireland": "ie", "dublin": "ie", "sweden": "se", "stockholm": "se",
  "poland": "pl", "portugal": "pt", "austria": "at", "belgium": "be",
  // Asia-Pacific
  "singapore": "sg", "japan": "jp", "tokyo": "jp",
  "australia": "au", "sydney": "au", "melbourne": "au",
  "canada": "ca", "toronto": "ca", "vancouver": "ca",
  "brazil": "br", "mexico": "mx", "south africa": "za",
  "israel": "il", "tel aviv": "il",
  "south korea": "kr", "china": "cn", "hong kong": "hk",
  "new zealand": "nz", "philippines": "ph", "vietnam": "vn",
  "uae": "ae", "dubai": "ae",
  // Remote / Worldwide
  "worldwide": "un", "global": "un", "anywhere": "un",
  "remote": "un", "earth": "un",
};

function getCountryCode(location: string): string | null {
  const loc = location.toLowerCase();
  for (const [key, code] of Object.entries(COUNTRY_MAP)) {
    if (loc.includes(key)) return code;
  }
  return null;
}

function getFlagUrl(code: string): string {
  return `https://flagcdn.com/20x15/${code}.png`;
}

function getJobTypeLabel(type?: string): string {
  const map: Record<string, string> = {
    full_time: "Full-time",
    part_time: "Part-time",
    contract: "Contract",
    freelance: "Freelance",
    internship: "Internship",
    other: "Other",
  };
  return type ? map[type] || type : "";
}

export function JobsSection() {
  const [filter, setFilter] = useState<JobFilter>("all");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchJobs(filter)
      .then((data) => {
        if (!cancelled) {
          setJobs(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Failed to load jobs. Try again later.");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [filter]);

  return (
    <section id="jobs" className="scroll-mt-20 mb-10">
      <div className="my-4">
        <ZigDivider label="Jobs" width={420} />
      </div>

      <div className="grid-card p-5 relative mb-4">
        <h2 className="text-sm font-semibold text-foreground mb-1">
          AI & ML jobs
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Live job listings — India + global remote, updated daily.
          Powered by{" "}
          <a
            href="https://adzuna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-foreground underline"
          >
            Adzuna
          </a>
          {" & "}
          <a
            href="https://remotive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-foreground underline"
          >
            Remotive
          </a>
          .
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        {Object.entries(jobFilterLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key as JobFilter)}
            className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap ${
              filter === key
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="grid-card p-12 flex items-center justify-center">
          <PhIcon
            name="spinner-gap"
            size={16}
            color="var(--ga-fg3)"
            className="animate-spin mr-2"
          />
          <span className="text-xs text-muted-foreground">Loading jobs...</span>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="grid-card p-8 text-center">
          <p className="text-xs text-muted-foreground">{error}</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && jobs.length === 0 && (
        <div className="grid-card p-8 text-center">
          <p className="text-xs text-muted-foreground">
            No jobs found for this category. Try a different filter.
          </p>
        </div>
      )}

      {/* Jobs list */}
      {!loading && !error && jobs.length > 0 && (
        <>
          <div className="text-[10px] text-text-dim mb-2 px-1">
            {jobs.length} positions found
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {jobs.map((job) => (
              <a
                key={job.id}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card group p-3 flex items-start gap-3 relative"
              >
                {/* Company logo or fallback */}
                {job.companyLogo ? (
                  <img
                    src={job.companyLogo}
                    alt={job.company}
                    className="w-8 h-8 rounded shrink-0 object-contain bg-secondary"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-8 h-8 rounded shrink-0 bg-secondary flex items-center justify-center">
                    <PhIcon name="briefcase" size={14} color="var(--ga-fg3)" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-semibold text-foreground transition-colors truncate">
                      {job.title}
                    </span>
                    <PhIcon
                      name="arrow-square-out"
                      size={9}
                      color="var(--ga-fg3)"
                      className="shrink-0"
                    />
                  </div>

                  {/* Company */}
                  <div className="text-[11px] text-muted-foreground font-medium mb-1.5">
                    {job.company}
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-[10px] text-text-dim mb-1.5">
                    <span className="flex items-center gap-1">
                      {(() => {
                        const cc = getCountryCode(job.location);
                        return cc ? (
                          <img
                            src={getFlagUrl(cc)}
                            alt={cc}
                            className="w-[14px] h-[10px] object-cover rounded-[1px]"
                            loading="lazy"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                          />
                        ) : (
                          <PhIcon name="map-pin" size={8} color="var(--ga-fg3)" />
                        );
                      })()}
                      <span className="truncate max-w-[120px]">
                        {job.location}
                      </span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      <PhIcon name="clock" size={8} color="var(--ga-fg3)" />
                      {job.date}
                    </span>
                    {job.salary && (
                      <span className="text-muted-foreground truncate max-w-[100px]">
                        {job.salary}
                      </span>
                    )}
                  </div>

                  {/* Tags + source */}
                  <div className="flex flex-wrap items-center gap-1">
                    <span className={NEUTRAL_CHIP}>
                      {job.source === "Adzuna" ? "IN" : "REMOTE"}
                    </span>
                    {job.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded bg-secondary text-muted-foreground text-[10px] tracking-wider font-mono truncate max-w-[80px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Job type badge */}
                {job.jobType && (
                  <span className={`${NEUTRAL_CHIP} shrink-0 mt-0.5`}>
                    {getJobTypeLabel(job.jobType)}
                  </span>
                )}
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
