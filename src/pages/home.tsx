import { Button } from "@/components/ui/button";
import { links } from "@/config/links";

export const Home = () => {
  return (
    <div className="grid min-h-screen place-content-center">
      <div className="dsy-hero">
        <div className="dsy-hero-content flex-col gap-8">
          <div className="flex gap-4 text-4xl md:text-6xl">
            <span className="icon-[logos--bun]" />
            <span className="icon-[logos--vitejs]" />
            <span className="icon-[logos--react]" />
            <span className="icon-[logos--typescript-icon]" />
            <span className="icon-[logos--tailwindcss-icon]" />
          </div>
          <div className="flex flex-col gap-4 text-center">
            <h1 className="from-primary to-secondary inline bg-linear-to-r bg-clip-text text-8xl font-bold text-transparent">
              React Starter
            </h1>
            <p className="prose dsy-prose dark:prose-invert py-6">
              🍱 Another{" "}
              <a href={links.React} rel="noreferrer" target="_blank">
                React
              </a>{" "}
              Starter using{" "}
              <a href={links.Bun} rel="noreferrer" target="_blank">
                Bun
              </a>
              ,{" "}
              <a href={links.Vite} rel="noreferrer" target="_blank">
                Vite
              </a>
              ,{" "}
              <a href={links.TypeScript} rel="noreferrer" target="_blank">
                TypeScript
              </a>
              ,{" "}
              <a href={links.tailwindcss} rel="noreferrer" target="_blank">
                tailwindcss
              </a>{" "}
              and{" "}
              <a href={links.daisyUI} rel="noreferrer" target="_blank">
                daisyUI
              </a>
              .
            </p>
            <div className="flex justify-center gap-2 sm:justify-end">
              <Button asChild color="secondary" size="sm">
                <a href={links.Deploy} rel="noreferrer" target="_blank">
                  Deploy <span className="icon-[logos--vercel-icon]" />
                </a>
              </Button>
              <Button asChild color="primary" size="sm">
                <a href={links.GitHub} rel="noreferrer" target="_blank">
                  GitHub <span className="icon-[logos--github-icon]" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
