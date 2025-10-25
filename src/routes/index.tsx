import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/hero";

function component() {
  return (
    <main className="grid min-h-screen place-items-center">
      <Hero />
    </main>
  );
}

export const Route = createFileRoute("/")({ component });
