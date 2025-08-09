import { Link } from "@tanstack/react-router";

export const DefaultNotFound = () => {
  return (
    <div
      aria-describedby="not-found-description"
      aria-labelledby="not-found-title"
      className="dsy-alert dsy-alert-info dsy-alert-vertical sm:dsy-alert-horizontal"
      role="alert"
    >
      <span aria-hidden="true" className="icon-[lucide--info] h-6 w-6" />
      <div className="min-w-0">
        <h1 className="text-lg font-semibold" id="not-found-title">
          Page not found
        </h1>
        <p className="text-sm opacity-90" id="not-found-description">
          We couldn’t find that page.
        </p>
      </div>
      <Link className="dsy-btn dsy-btn-outline dsy-btn-sm" to="/">
        Go to Home
      </Link>
    </div>
  );
};
