import { XLink } from "@/components/x-link";

export const Home = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="dsy-hero min-h-screen">
        <div className="dsy-hero-content flex-col gap-8">
          <div className="flex gap-4">
            <span className="icon-[logos--bun] text-5xl md:text-7xl" />
            <span className="icon-[logos--vitejs] text-5xl md:text-7xl" />
            <span className="icon-[logos--react] text-5xl md:text-7xl" />
            <span className="icon-[logos--typescript-icon] text-5xl md:text-7xl" />
            <span className="icon-[logos--tailwindcss-icon] text-5xl md:text-7xl" />
          </div>
          <div className="flex flex-col gap-4 text-center">
            <h1 className="inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-8xl font-bold text-transparent">
              React Starter
            </h1>
            <p className="prose dsy-prose py-6">
              🍱 Another opinionated <XLink to="React">React</XLink> Starter
              using <XLink to="Bun">Bun</XLink>, <XLink to="Vite">Vite</XLink>,{" "}
              <XLink to="TypeScript">TypeScript</XLink> and{" "}
              <XLink to="tailwindcss">tailwindcss</XLink>.
            </p>
            <div className="flex justify-center gap-2 sm:justify-end">
              <XLink to="Deploy" variant="secondary" isButton>
                Deploy <span className="icon-[logos--vercel-icon]" />
              </XLink>
              <XLink to="GitHub" variant="primary" isButton>
                GitHub <span className="icon-[logos--github-icon]" />
              </XLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
