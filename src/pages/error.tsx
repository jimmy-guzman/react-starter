import type { ErrorComponentProps } from "@tanstack/react-router";

import { Link } from "@tanstack/react-router";

export const Error = ({ error }: ErrorComponentProps) => {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="dsy-hero">
        <div className="dsy-hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold lg:text-7xl xl:text-9xl">
              Error
            </h1>
            <p className="text-error mb-5">{error.message}</p>
            <button className="dsy-btn dsy-btn-outline" type="button">
              <Link to="/">Go back</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
