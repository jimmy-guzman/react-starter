import type { ErrorComponentProps } from "@tanstack/react-router";

export const DefaultError = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div
      aria-atomic="true"
      aria-describedby="error-description"
      aria-labelledby="error-title"
      aria-live="assertive"
      className="dsy-alert dsy-alert-error dsy-alert-vertical sm:dsy-alert-horizontal"
      role="alert"
    >
      <span
        aria-hidden="true"
        className="icon-[lucide--circle-alert] h-6 w-6"
      />

      <div className="min-w-0">
        <h2 className="text-lg font-bold" id="error-title">
          Error
        </h2>
        <p
          className="text-sm break-words whitespace-pre-wrap"
          id="error-description"
        >
          {error.message}
        </p>
      </div>

      <button
        className="dsy-btn dsy-btn-sm dsy-btn-outline"
        onClick={reset}
        type="button"
      >
        Reset
      </button>
    </div>
  );
};
