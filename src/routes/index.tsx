import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/hero";

export const Route = createFileRoute("/")({ component });

function component() {
  return (
    <main className="grid min-h-screen place-content-center">
      <Hero />
    </main>
  );
}
