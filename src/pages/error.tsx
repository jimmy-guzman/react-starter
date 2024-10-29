import { type ErrorComponentProps, Link } from "@tanstack/react-router";

export const Error = ({ error }: ErrorComponentProps) => {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="dsy-hero">
        <div className="dsy-hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl">
              Error
            </h1>
            <p className="mb-5">{error.message}</p>
            <Link className="dsy-btn dsy-btn-outline" to="/">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
