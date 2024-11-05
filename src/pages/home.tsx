import { ExtLink } from "@/components/ext-link";

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
              <ExtLink color="secondary" to="Deploy" variant="button">
                Deploy <span className="icon-[logos--vercel-icon]" />
              </ExtLink>
              <ExtLink color="primary" to="GitHub" variant="button">
                GitHub <span className="icon-[logos--github-icon]" />
              </ExtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
