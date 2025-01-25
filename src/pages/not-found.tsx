import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const NotFound = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="dsy-hero">
        <div className="dsy-hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold lg:text-7xl xl:text-9xl">
              Error
            </h1>
            <p className="text-error mb-5">Not Found</p>
            <Button asChild variant="outline">
              <Link to="/">Go back</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
