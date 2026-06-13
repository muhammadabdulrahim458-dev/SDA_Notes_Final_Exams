import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border px-4 py-1 text-sm text-muted-foreground">
          📚 Software Design & Architecture Notes
        </div>

        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Master Software Design
          <br />
          & Architecture
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Complete SDA notes with simple explanations, UML diagrams,
          design patterns, architectural styles, SOLID principles,
          examples, exam preparation, and viva guidance.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Start Learning →
          </Link>

          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition hover:bg-muted"
          >
            Browse Topics
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-left">
            <div className="mb-3 text-2xl">🏗️</div>
            <h3 className="font-semibold">Architecture</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Learn architectural styles, layers, and system design concepts.
            </p>
          </div>

          <div className="rounded-xl border p-6 text-left">
            <div className="mb-3 text-2xl">📦</div>
            <h3 className="font-semibold">Design Patterns</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Creational, Structural, and Behavioral patterns with examples.
            </p>
          </div>

          <div className="rounded-xl border p-6 text-left">
            <div className="mb-3 text-2xl">📊</div>
            <h3 className="font-semibold">UML Diagrams</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Class, Sequence, Activity, State, and Component diagrams.
            </p>
          </div>

          <div className="rounded-xl border p-6 text-left">
            <div className="mb-3 text-2xl">🎓</div>
            <h3 className="font-semibold">Exam Prep</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Definitions, viva questions, summaries, and revision notes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}