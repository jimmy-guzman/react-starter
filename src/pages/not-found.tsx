import { Link } from "@tanstack/react-router";

export const NotFound = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="dsy-hero">
        <div className="dsy-hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold lg:text-7xl xl:text-9xl">
              Error
            </h1>
            <p className="mb-5 text-error">Not Found</p>
            <Link className="dsy-btn dsy-btn-outline" to="/">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
