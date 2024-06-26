import { ExtLink } from "@/components/ext-link";

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
              🍱 Another <ExtLink to="React">React</ExtLink> Starter using{" "}
              <ExtLink to="Bun">Bun</ExtLink>, <ExtLink to="Vite">Vite</ExtLink>
              , <ExtLink to="TypeScript">TypeScript</ExtLink>,{" "}
              <ExtLink to="tailwindcss">tailwindcss</ExtLink> and{" "}
              <ExtLink to="daisyUI">daisyUI</ExtLink>.
            </p>
            <div className="flex justify-center gap-2 sm:justify-end">
              <ExtLink to="Deploy" color="secondary" variant="button">
                Deploy <span className="icon-[logos--vercel-icon]" />
              </ExtLink>
              <ExtLink to="GitHub" color="primary" variant="button">
                GitHub <span className="icon-[logos--github-icon]" />
              </ExtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
