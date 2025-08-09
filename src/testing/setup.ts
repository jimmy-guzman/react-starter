import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

import { server } from "./mocks/server";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();

  cleanup();
});
