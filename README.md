# React Starter

> 🍱 another opinionated React starter

## Features

- ⚡️ [vite](https://vitejs.dev/guide/why.html) for fast server start and HMR, with:
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for a even faster dev Server
- 🏷️ [TypeScript](https://www.typescriptlang.org) for a less frustrating & consistent experience, with:
  - configuration tune to [strict](https://github.com/tsconfig/bases/blob/main/bases/strictest.json)
  - absolute imports and module path aliases for easier imports
- 💄 [tailwindcss](https://tailwindcss.com) for utility-first CSS, with:
  - [daisyUI components](https://daisyui.com) for faster development
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) for typographic defaults
- 🧪 [vitest](https://vitest.dev/guide/why.html) for fast testing, with:
  - [testing-library](https://testing-library.com/docs/guiding-principles) for encouraging good testing practices, with:
    - [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) for providing DOM element matchers for
    - [user-event](https://testing-library.com/docs/user-event/intro) for simulating user events
- 🧪 [Playwright](https://playwright.dev/) for fast and reliable e2e testing
- 🩺 [eslint](https://eslint.org) for static analysis, with:
  - [eslint-config-jimmy-guzman](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman) for opinionated guidelines
- 🎨 [prettier](https://prettier.io) for formatting
- ⚡️ [pnpm](https://pnpm.io) for fast and consistent installs

## Getting Started

Make sure you're using [node 18](https://nodejs.dev/en/about/releases), I recommend using [fnm](https://github.com/Schniz/fnm) which will allow to simply run:

```
fnm use
```

First install dependencies with [pnpm](https://pnpm.io/installation), by running the following command:

```
pnpm install
```

Then to run the development server, run the following command:

```
pnpm dev
```

Your application will be available at http://localhost:5173/ ❤️

## Available Scripts

To build for production, run the following command:

```
pnpm build
```

To build preview production build, run the following command:

```
pnpm preview
```

_must have ran `pnpm build` previously_

To run unit tests, run the following command:

```
pnpm test
```

To run e2e tests, run the following command:

```
pnpm e2e
```

To lint, run the following command:

```
pnpm lint
```

_you can run `pnpm lint:fix` to fix all lint errors_

To format, run the following command:

```
pnpm format
```

_you can run `pnpm format:fix` to fix all format errors_

## Recommendations

If you need to do more, I recommend the following libraries:

- [TanStack Query (React Query)](https://tanstack.com/query/v3/) for **data management** which will take care of fetching, caching, synchronizing and updating server state for you
  - [msw](https://mswjs.io/) for when you start testing your data integrations
- [React Router](https://reactrouter.com/en/main) for when you need **client side routing**
- [jotai](https://jotai.org/) for when you don't want to use context for **state management** or need more state management outside of React Query
- [zustand](https://github.com/pmndrs/zustand) for when you need more **state management** outside of React Query or jotai if you wen that route
- [React Hook Form](https://react-hook-form.com/) for when you need to build **forms**
- [TanStack Table (React Table)](https://tanstack.com/table/v8) for when you need to build complex **tables** or **data grids**
- [fathom](https://usefathom.com/) for **analytics** which is easy to use
