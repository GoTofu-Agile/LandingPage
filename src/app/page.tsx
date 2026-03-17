import Link from "next/link";
import {
  MessageCircle,
  Users,
  Sparkles,
  MessageSquare,
  BrainCircuit,
  MessageSquareText,
  FileText,
  Lightbulb,
  Zap,
  Download,
  UsersRound,
  ClipboardCheck,
  MousePointerClick,
  BarChart3,
  Share2,
  Layers,
  Database,
  Brain,
} from "lucide-react";

function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-glow)]"
      : "text-[var(--accent)] hover:text-[#004a99] bg-[var(--muted-bg)]/60 hover:bg-[var(--muted-bg)]";
  return <button className={`${base} ${styles}`}>{children}</button>;
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4"
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-[var(--background)]">
      <div className="mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-8 sm:px-6">
        {/* Top nav */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent)] text-white"
              aria-label="Tofu logo"
            >
              <span className="text-lg" aria-hidden="true">
                🎙️
              </span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
              Tofu
            </span>
          </div>
          <nav className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
            <a
              href="#how-it-works"
              className="whitespace-nowrap text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              How it works
            </a>
            <a
              href="#features"
              className="whitespace-nowrap text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Features
            </a>
            <a
              href="#roadmap"
              className="whitespace-nowrap text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Roadmap
            </a>
            <Link
              href="https://app.gotofu.io/login"
              className="whitespace-nowrap text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Sign in
            </Link>
            <Link href="https://app.gotofu.io/register">
              <Button>Get started</Button>
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="pb-16">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--muted-bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--muted)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              AI-powered user research
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Discover what users really think.
              <br />
              At scale.
            </h1>
            <p className="text-base text-[var(--muted)] sm:text-lg">
              Generate realistic AI personas from real-world data, run synthetic
              interviews at scale, and get actionable insights — in minutes, not
              months.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="https://app.gotofu.io/register">
                <Button>Start for free</Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="ghost">See how it works</Button>
              </a>
            </div>
          </div>

          {/* Sample chat */}
          <div className="mt-10 flex justify-center">
            <Card>
              <div className="mb-3 flex items-center justify-between text-xs text-[var(--muted)]">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-muted)] text-base">
                    SP
                  </span>
                  <span className="font-medium text-[var(--foreground)]">
                    Sarah Park
                  </span>
                </span>
                <span>In progress</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-end">
                  <div className="max-w-[75%] rounded-2xl rounded-br-md bg-[var(--accent)] px-4 py-2.5 text-left text-xs leading-relaxed text-white">
                    What frustrates you most about current project management
                    tools?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--muted-bg)] px-4 py-2.5 text-xs leading-relaxed text-[var(--foreground)]">
                    Honestly? Most of them try to do everything and end up
                    doing nothing well. I&apos;ve tried Asana, Monday, and
                    Linear — they all start simple but become bloated within
                    months. What I really need is something that stays out of my
                    way and just lets me ship.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[75%] rounded-2xl rounded-br-md bg-[var(--accent)] px-4 py-2.5 text-left text-xs leading-relaxed text-white">
                    Can you tell me about a specific moment where the tool got
                    in your way?
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pl-1">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]/60" />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]/40" />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]/20" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Three steps */}
        <section
          id="how-it-works"
          className="border-t border-[var(--card-border)] bg-[var(--muted-bg-elevated)]/40 py-12"
        >
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              How it works
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              From zero to insights in three steps
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
                <Users className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Define your audience
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Describe the people you want to talk to — by prompt, LinkedIn
                profile, company URL, or deep web research. Tofu finds
                real-world context from Reddit, forums, and reviews.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Generate personas
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Get psychologically rich user profiles with unique personalities,
                backstories, and honest perspectives — including skeptics who
                challenge your thinking.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Run studies
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Run in-depth interviews where personas respond naturally based
                on their personality and backstory. Extract patterns and
                insights across sessions automatically.
              </p>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t border-[var(--card-border)] py-12"
        >
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Features
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              Everything you need to understand your users
            </h2>
            <p className="mt-4 text-sm text-[var(--muted)] sm:text-base">
              From persona generation to insight extraction — one platform for
              your entire synthetic research workflow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <BrainCircuit
                  className="h-4 w-4 text-[var(--foreground)]"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Research-powered personas
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Personas built from real data — Reddit threads, app store
                reviews, forum discussions. Not generic stereotypes.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <MessageSquareText
                  className="h-4 w-4 text-[var(--foreground)]"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Multi-turn interviews
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Natural conversations that go deep. Personas stay in character
                with consistent personalities and realistic follow-ups.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <FileText
                  className="h-4 w-4 text-[var(--foreground)]"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                AI interview guides
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Generate structured interview guides from your research goals.
                The AI follows them naturally, probing where it matters.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <Lightbulb
                  className="h-4 w-4 text-[var(--foreground)]"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Auto-generated insights
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Key themes, patterns, and actionable recommendations extracted
                automatically from every interview session.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <Zap
                  className="h-4 w-4 text-[var(--foreground)]"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Batch interview runner
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Run interviews with dozens of personas simultaneously. Get
                comprehensive coverage in the time it takes to make coffee.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <Download
                  className="h-4 w-4 text-[var(--foreground)]"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Export &amp; analyze
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Download full transcripts as CSV. Bring your data into any
                analysis tool, or let our AI surface what matters.
              </p>
            </Card>
          </div>
        </section>

        {/* Roadmap */}
        <section
          id="roadmap"
          className="border-t border-[var(--card-border)] bg-[var(--muted-bg-elevated)]/40 py-12"
        >
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Roadmap
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              What&apos;s coming next
            </h2>
            <p className="mt-4 text-sm text-[var(--muted)] sm:text-base">
              We&apos;re building the future of synthetic user research. Here&apos;s
              what&apos;s on our radar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                  <UsersRound
                    className="h-4 w-4 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
                <span className="rounded-full bg-[var(--muted-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                  In development
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Focus groups
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Simulate group discussions with multiple personas interacting in
                real time.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                  <ClipboardCheck
                    className="h-4 w-4 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
                <span className="rounded-full bg-[var(--muted-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                  In development
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Surveys at scale
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Deploy structured surveys to hundreds of synthetic respondents
                simultaneously.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                  <MousePointerClick
                    className="h-4 w-4 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
                <span className="rounded-full bg-[var(--muted-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                  Planned
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Usability testing
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Let AI personas walk through your prototype and surface friction
                points.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                  <BarChart3
                    className="h-4 w-4 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
                <span className="rounded-full bg-[var(--muted-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                  Planned
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Analysis dashboards
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Interactive dashboards to visualize patterns across studies and
                sessions.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                  <Share2
                    className="h-4 w-4 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
                <span className="rounded-full bg-[var(--muted-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                  Planned
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Team collaboration
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Share studies, tag colleagues, and build a shared research
                repository.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                  <Layers
                    className="h-4 w-4 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
                <span className="rounded-full bg-[var(--muted-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                  Planned
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Custom persona templates
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Save and reuse persona configurations across studies and teams.
              </p>
            </Card>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-gradient-to-br from-black via-black to-[#1c1c1e] p-8 text-center text-white">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Stop guessing.
              <br />
              Start understanding.
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Run synthetic interviews today. No recruitment, no scheduling, no
              waiting — just honest, unfiltered feedback.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link href="https://app.gotofu.io/register">
                <Button>Get started for free</Button>
              </Link>
              <Link
                href="https://app.gotofu.io/login"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Or sign in to your workspace
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

