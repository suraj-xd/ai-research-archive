import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkle,
  Logo,
  PhIcon,
  ZigDivider,
  Sidebar,
  TopBar,
} from "@/components/brand";

/* ─────────────────────────────────────────────────────────────────
   Layout helpers
   ───────────────────────────────────────────────────────────────── */

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ga" style={{ padding: "48px 0" }}>
      <header style={{ marginBottom: 24 }}>
        <ZigDivider label={eyebrow} width={420} />
        <h2
          style={{
            fontFamily: "var(--ga-font-sans)",
            fontWeight: 600,
            fontSize: 24,
            color: "var(--ga-fg1)",
            marginTop: 16,
            textAlign: "center",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h2>
      </header>
      <div>{children}</div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--ga-font-mono)",
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--ga-fg2)",
        width: 110,
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function Swatch({
  name,
  value,
  varName,
}: {
  name: string;
  value: string;
  varName?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          width: 92,
          height: 64,
          borderRadius: 8,
          background: value,
          border: "1px solid var(--ga-divider)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontFamily: "var(--ga-font-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--ga-fg1)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--ga-font-mono)",
            fontSize: 11,
            color: "var(--ga-fg2)",
          }}
        >
          {value}
        </span>
        {varName && (
          <span
            style={{
              fontFamily: "var(--ga-font-mono)",
              fontSize: 10,
              color: "var(--ga-fg3)",
            }}
          >
            --{varName}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────────── */

export default function DesignSystemPage() {
  const [active, setActive] = useState("home");

  return (
    <div
      className="ga"
      style={{
        minHeight: "100vh",
        background: "var(--ga-bg)",
        color: "var(--ga-fg1)",
      }}
    >
      <main style={{ maxWidth: 980, margin: "0 auto", padding: "64px 32px 120px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 18,
            }}
          >
            <Sparkle size={36} />
            <Logo size={26} />
          </div>
          <p
            style={{
              fontFamily: "var(--ga-font-mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ga-fg2)",
              margin: 0,
            }}
          >
            General Agents · Design System
          </p>
          <h1
            style={{
              fontFamily: "var(--ga-font-sans)",
              fontWeight: 600,
              fontSize: 32,
              color: "var(--ga-fg1)",
              margin: "12px 0 0",
              letterSpacing: "-0.01em",
            }}
          >
            Tokens, primitives, app shell
          </h1>
          <p
            style={{
              fontFamily: "var(--ga-font-sans)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ga-fg2)",
              maxWidth: 520,
              margin: "12px auto 0",
              lineHeight: 1.5,
            }}
          >
            Sourced from the canonical design-system zip. Off-white surfaces,
            black keycap buttons, mono labels, sentence case copy, sparkle
            for accent. No emoji.
          </p>
        </div>

        {/* ─── Brand ─── */}
        <Section eyebrow="Brand" title="Marks & motifs">
          <Row>
            <Tag>Logo</Tag>
            <Logo size={22} />
            <Logo size={32} />
            <Logo size={48} />
          </Row>
          <Row>
            <Tag>Sparkle</Tag>
            <Sparkle size={18} />
            <Sparkle size={28} />
            <Sparkle size={48} />
            <span
              style={{
                fontFamily: "var(--ga-font-sans)",
                fontSize: 13,
                color: "var(--ga-fg2)",
              }}
            >
              the only saturated color in the system
            </span>
          </Row>
          <Row>
            <Tag>Wordmark</Tag>
            <img
              src="/assets/brand/ronika-wordmark.svg"
              alt="Ronika"
              style={{ height: 32 }}
            />
            <img
              src="/assets/brand/ronika-wordmark-small.svg"
              alt="Ronika small"
              style={{ height: 22 }}
            />
            <img
              src="/assets/brand/general-agents-logo.svg"
              alt="General Agents"
              style={{ height: 28 }}
            />
          </Row>
        </Section>

        {/* ─── Colors ─── */}
        <Section eyebrow="Colors" title="Neutrals do 95% of the work">
          <Row>
            <Tag>Surfaces</Tag>
            <Swatch name="App bg" value="#FBFBFB" varName="ga-bg" />
            <Swatch name="Surface" value="#FFFFFF" varName="ga-surface" />
            <Swatch name="Sidebar" value="#F8F8F8" varName="ga-sidebar" />
            <Swatch name="Hover" value="#EFEFEF" varName="ga-hover" />
            <Swatch name="Chip" value="#F3F3F3" varName="ga-chip" />
          </Row>
          <Row>
            <Tag>Borders</Tag>
            <Swatch name="Divider" value="#E9E9E9" varName="ga-divider" />
            <Swatch name="Border" value="#E1E1E1" varName="ga-border" />
            <Swatch
              name="Strong"
              value="#CFCFCF"
              varName="ga-border-strong"
            />
          </Row>
          <Row>
            <Tag>Ink ramp</Tag>
            <Swatch name="ink-400" value="#ADADAD" varName="ga-ink-400" />
            <Swatch name="ink-500" value="#929292" varName="ga-ink-500" />
            <Swatch name="ink-600" value="#6E6E6E" varName="ga-ink-600" />
            <Swatch name="ink-700" value="#4A4A4A" varName="ga-ink-700" />
            <Swatch name="ink-800" value="#272727" varName="ga-ink-800" />
            <Swatch name="ink-900" value="#1D1D1D" varName="ga-ink-900" />
          </Row>
          <Row>
            <Tag>Category</Tag>
            <Swatch name="Green" value="#2AB673" varName="ga-cat-green" />
            <Swatch name="Blue" value="#2F7CF6" varName="ga-cat-blue" />
            <Swatch name="Red" value="#E4402C" varName="ga-cat-red" />
            <Swatch name="Orange" value="#E8822A" varName="ga-cat-orange" />
            <Swatch name="Purple" value="#6E56CF" varName="ga-cat-purple" />
            <Swatch name="Yellow" value="#E9B949" varName="ga-cat-yellow" />
          </Row>
        </Section>

        {/* ─── Typography ─── */}
        <Section eyebrow="Type" title="Overused Grotesk · IBM Plex Mono">
          <div
            style={{
              background: "var(--ga-surface)",
              borderRadius: 12,
              padding: 28,
              boxShadow: "var(--ga-shadow-md)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <p
              style={{
                fontFamily: "var(--ga-font-sans)",
                fontSize: 32,
                fontWeight: 600,
                color: "var(--ga-fg1)",
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Page heading 32 / 600
            </p>
            <p
              style={{
                fontFamily: "var(--ga-font-sans)",
                fontSize: 24,
                fontWeight: 600,
                color: "var(--ga-fg1)",
                margin: 0,
              }}
            >
              Section title 24 / 600
            </p>
            <p
              style={{
                fontFamily: "var(--ga-font-sans)",
                fontSize: 18,
                fontWeight: 600,
                color: "var(--ga-fg1)",
                margin: 0,
              }}
            >
              Subsection 18 / 600
            </p>
            <p
              style={{
                fontFamily: "var(--ga-font-sans)",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--ga-fg1)",
                margin: 0,
              }}
            >
              Card title 16 / 600
            </p>
            <p
              style={{
                fontFamily: "var(--ga-font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ga-fg1)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Body 14 / 500 — Overused Grotesk Medium is the workhorse weight
              for all UI text. Letter-spacing 0.02em across the system.
            </p>
            <p
              style={{
                fontFamily: "var(--ga-font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ga-fg2)",
                margin: 0,
              }}
            >
              Body secondary 14 / 500 — fg2
            </p>
            <p
              style={{
                fontFamily: "var(--ga-font-mono)",
                fontSize: 12,
                fontWeight: 500,
                color: "var(--ga-fg3)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              MONO LABEL · IBM PLEX MONO 12 / 500 · UPPERCASE
            </p>
          </div>
        </Section>

        {/* ─── Buttons ─── */}
        <Section eyebrow="Buttons" title="Keycap primary, white secondary, ghost">
          <Row>
            <Tag>Primary</Tag>
            <Button>
              <PhIcon name="copy" size={16} color="#fff" /> Copy
            </Button>
            <Button>Submit instruction</Button>
            <Button>
              Open mailbox <PhIcon name="arrow-right" size={16} color="#fff" />
            </Button>
            <Button aria-disabled>Disabled</Button>
          </Row>
          <Row>
            <Tag>Secondary</Tag>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary">
              <PhIcon name="funnel" size={16} /> Filter
            </Button>
            <Button variant="secondary">Clear all filters</Button>
            <Button variant="secondary" aria-disabled>
              Disabled
            </Button>
          </Row>
          <Row>
            <Tag>Ghost</Tag>
            <Button variant="ghost">
              <PhIcon name="arrow-left" size={14} /> Back
            </Button>
            <Button variant="ghost">See all</Button>
          </Row>
          <Row>
            <Tag>Sizes</Tag>
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Settings">
              <PhIcon name="gear-six" size={18} color="#fff" />
            </Button>
          </Row>
        </Section>

        {/* ─── Inputs ─── */}
        <Section eyebrow="Inputs" title="Prompt, simple, chips, pills">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 660,
            }}
          >
            <div>
              <Tag>Prompt · 54h · r9</Tag>
              <input
                className="ga-input-prompt"
                placeholder="Find out ex-Tesla employees"
                style={{ marginTop: 6 }}
              />
            </div>
            <div>
              <Tag>Simple · 36h · r4</Tag>
              <input
                className="ga-input-simple"
                placeholder="https://google.com"
                style={{ marginTop: 6 }}
              />
            </div>
            <div>
              <Tag>Chips</Tag>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginTop: 6,
                }}
              >
                <span className="ga-chip">
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: "#000",
                    }}
                  />
                  formalrahulbiswas
                  <span className="x">×</span>
                </span>
                <span className="ga-chip">
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: "var(--ga-cat-red)",
                    }}
                  />
                  rahul@induced.ai
                  <span className="x">×</span>
                </span>
                <span className="ga-chip">
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: "var(--ga-cat-purple)",
                    }}
                  />
                  rahul@slack
                  <span className="x">×</span>
                </span>
              </div>
            </div>
            <div>
              <Tag>Status pills</Tag>
              <div
                style={{ display: "flex", gap: 8, marginTop: 6 }}
              >
                <span className="ga-pill">
                  <span className="spinner" />
                  In progress
                </span>
                <span className="ga-pill-dark">50%</span>
                <span className="ga-pill-dark">Payable amount</span>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── Card pattern ─── */}
        <Section eyebrow="Card" title="Detail confirmation card">
          <div className="ga-card" style={{ maxWidth: 620 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "#fff",
                  border: "1px solid var(--ga-divider)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhIcon name="list-dashes" size={16} />
              </div>
              <div
                style={{
                  fontFamily: "var(--ga-font-sans)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--ga-fg1)",
                  letterSpacing: "0.01em",
                }}
              >
                Here is what we get, check and confirm details
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "var(--ga-ink-800)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhIcon name="check" weight="bold" size={13} color="#fff" />
              </div>
            </div>

            {[
              {
                icon: "buildings",
                label: "Company name",
                value: "Tesla",
              },
              {
                icon: "map-pin",
                label: "Location",
                value: "San Francisco",
              },
              {
                icon: "briefcase",
                label: "Work experience",
                value: "Any",
                muted: true,
              },
            ].map((row, idx) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 0",
                  borderTop:
                    idx === 0 ? "0" : "1px solid var(--ga-chip)",
                  fontSize: 14,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--ga-fg2)",
                    flex: 1,
                  }}
                >
                  <PhIcon
                    name={row.icon}
                    size={15}
                    color="var(--ga-fg2)"
                  />
                  {row.label}
                </span>
                <span
                  style={{
                    fontWeight: 500,
                    color: row.muted ? "var(--ga-fg3)" : "var(--ga-fg1)",
                  }}
                >
                  {row.value}
                </span>
                <span
                  style={{
                    width: 22,
                    height: 22,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                    cursor: "pointer",
                    color: "var(--ga-fg2)",
                  }}
                >
                  <PhIcon
                    name="pencil-simple"
                    size={13}
                    color="var(--ga-fg2)"
                  />
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── App shell preview ─── */}
        <Section eyebrow="App shell" title="Sidebar + top bar primitives">
          <div
            style={{
              border: "1px solid var(--ga-divider)",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "var(--ga-shadow-md)",
              background: "var(--ga-surface)",
            }}
          >
            <TopBar crumbs={["AI Research Archive", "Sample job"]} />
            <div style={{ display: "flex", minHeight: 360 }}>
              <Sidebar
                groups={[
                  {
                    label: "PAGES",
                    items: [
                      {
                        id: "home",
                        icon: "diamond",
                        iconWeight: "fill",
                        label: "Home",
                      },
                      {
                        id: "templates",
                        icon: "squares-four",
                        label: "Templates",
                      },
                      {
                        id: "history",
                        icon: "clock-counter-clockwise",
                        label: "Job history",
                      },
                    ],
                  },
                  {
                    label: "SAVES",
                    items: [
                      { id: "files", icon: "folder", label: "Files" },
                      { id: "accounts", icon: "key", label: "Accounts" },
                    ],
                  },
                ]}
                recent={[
                  { id: "r1", label: "Top California Hotel Re…" },
                  { id: "r2", label: "Find ex-Tesla employees" },
                ]}
                user={{ name: "Suraj" }}
                active={active}
                onNav={setActive}
              />
              <div
                style={{
                  flex: 1,
                  background: "var(--ga-bg)",
                  padding: "32px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <Button variant="ghost">
                    <PhIcon name="arrow-left" size={14} /> Back
                  </Button>
                  <span className="ga-pill">
                    <span className="spinner" />
                    In progress
                  </span>
                </div>
                <div className="ga-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        background: "#fff",
                        border: "1px solid var(--ga-divider)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhIcon name="text-t" size={15} />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--ga-font-sans)",
                        fontWeight: 600,
                        fontSize: 16,
                        color: "var(--ga-fg1)",
                      }}
                    >
                      Prompt
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--ga-font-sans)",
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "var(--ga-fg1)",
                      margin: 0,
                    }}
                  >
                    Find out ex-Tesla employees in San Francisco.
                  </p>
                </div>
                <ZigDivider label="Or" width={220} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 8,
                  }}
                >
                  <Button variant="secondary">Cancel</Button>
                  <Button>Submit instruction</Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── Iconography ─── */}
        <Section eyebrow="Icons" title="Phosphor regular + fill">
          <Row>
            <Tag>Regular</Tag>
            {[
              "magnifying-glass",
              "diamond",
              "squares-four",
              "folder",
              "key",
              "user",
              "gear-six",
              "buildings",
              "map-pin",
              "briefcase",
              "funnel",
              "arrow-right",
              "arrow-left",
              "check",
              "x",
              "pencil-simple",
            ].map((n) => (
              <PhIcon key={n} name={n} size={20} color="var(--ga-fg1)" />
            ))}
          </Row>
          <Row>
            <Tag>Fill (categories)</Tag>
            {[
              "lightning",
              "trophy",
              "umbrella",
              "graduation-cap",
              "book",
              "shopping-bag",
              "globe",
              "gear-six",
            ].map((n) => (
              <PhIcon
                key={n}
                name={n}
                weight="fill"
                size={20}
                color="var(--ga-fg2)"
              />
            ))}
          </Row>
        </Section>

        {/* ─── Radii / shadows ─── */}
        <Section eyebrow="Form" title="Radii, shadows, spacing">
          <Row>
            <Tag>Radius</Tag>
            {[
              { name: "xs · 4", r: 4 },
              { name: "sm · 6", r: 6 },
              { name: "md · 8", r: 8 },
              { name: "lg · 12", r: 12 },
              { name: "xl · 16", r: 16 },
              { name: "full", r: 999 },
            ].map((s) => (
              <div
                key={s.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: s.r,
                    background: "var(--ga-ink-800)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--ga-font-mono)",
                    fontSize: 11,
                    color: "var(--ga-fg2)",
                  }}
                >
                  {s.name}
                </span>
              </div>
            ))}
          </Row>
          <Row>
            <Tag>Shadows</Tag>
            {[
              { name: "sm", v: "var(--ga-shadow-sm)" },
              { name: "md", v: "var(--ga-shadow-md)" },
              { name: "lg", v: "var(--ga-shadow-lg)" },
            ].map((s) => (
              <div
                key={s.name}
                style={{
                  width: 96,
                  height: 64,
                  borderRadius: 12,
                  background: "#fff",
                  boxShadow: s.v,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--ga-font-mono)",
                  fontSize: 11,
                  color: "var(--ga-fg2)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {s.name}
              </div>
            ))}
          </Row>
        </Section>

        <p
          style={{
            fontFamily: "var(--ga-font-mono)",
            fontSize: 11,
            color: "var(--ga-fg3)",
            textAlign: "center",
            marginTop: 48,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Tokens — src/index.css · Primitives — src/components/brand/* · Sources — General Agents Design System.zip
        </p>
      </main>
    </div>
  );
}
