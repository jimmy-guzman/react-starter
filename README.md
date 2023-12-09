# React Starter

> 🍱 another opinionated [React][react] starter

## 🐣 Features

[![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)][vite]
[![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)][react]
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)][TypeScript]
[![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)][tailwindcss]
[![storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)][storybook]
[![vitest](https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)][vitest]
[![Testing Library](https://img.shields.io/badge/-testinglibrary-%23E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)][Testing Library]
[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)][Playwright]
[![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)][eslint]
[![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)][prettier]
[![pnpm](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)][pnpm]
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)][GitHub Actions]

- ⚡️ [vite][vite] for instant server start and lighting fast HMR.
- 🏷️ [TypeScript][TypeScript] for a less frustrating & consistent experience.
- 💄 [tailwindcss][tailwindcss] for utility-first CSS.
- 🧱 [storybook][storybook] for building UIs in isolation.
- 🧪 [vitest][vitest] for fast testing.
- 🧪 [Playwright][Playwright] for fast and reliable e2e testing.
- 🩺 [eslint][eslint] for static analysis.
- 🎨 [prettier][prettier] for formatting.
- 📦 [pnpm][pnpm] for fast and consistent installs.
- 👷 [GitHub Actions][GitHub Actions] for easy workflow automation.

## 🛠️ Usage

You can either [use this template](https://github.com/jimmy-guzman/react-starter/generate) or [deploy on Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjimmy-guzman%2Freact-starter&project-name=my-awesome-react-project&repository-name=my-awesome-react-project) or use [degit](https://github.com/Rich-Harris/degit), by running the following command:

```
degit jimmy-guzman/react-starter
```

## 🏁 Getting Started

Make sure you're using [node 20](https://nodejs.dev/en/about/releases), I recommend using [fnm](https://github.com/Schniz/fnm) which will allow you to simply run:

```
fnm use
```

First install dependencies with [pnpm](https://pnpm.io/installation), by running the following command:

```
pnpm install
```

And to download new browsers for Playwright, run the following command:

```
pnpm exec playwright install
```

Then to run the development server, run the following command:

```
pnpm dev
```

Your application will be available at http://localhost:5173/ ❤️

## 🧞 Available Tasks

| Command              | Action                                                   |
| :------------------- | :------------------------------------------------------- |
| `pnpm install`       | Installs dependencies                                    |
| `pnpm dev`           | Starts local dev server at http://localhost:5173/        |
| `pnpm build`         | Build your production site to `./dist/`                  |
| `pnpm preview`       | Preview your build locally, before deploying             |
| `pnpm test`          | Unit tests your code with vitest                         |
| `pnpm e2e`           | E2E tests your code with playwright                      |
| `pnpm lint`          | Lints everything with eslint                             |
| `pnpm lint:fix`      | Fixes lint errors with eslint                            |
| `pnpm format`        | Checks formatting with prettier                          |
| `pnpm format:fix`    | Fixes formatting errors with prettier                    |
| `pnpm typecheck`     | Checks types with TypeScript                             |
| `pnpm deps:bump`     | Interactively updates dependencies                       |
| `pnpm deps:check`    | Checks dependencies                                      |
| `pnpm stories`       | Starts storybook at http://localhost:6006                |
| `pnpm stories:build` | Build your production storybook to `./storybook-static/` |

## 💡 Recommendations

If you need to do more, I recommend the following libraries:

- [TanStack Query (React Query)](https://tanstack.com/query/v5/docs/react/overview) for **data management** which will take care of fetching, caching, synchronizing and updating server state for you
  - [msw](https://mswjs.io) for when you start testing your data integrations
- [React Router](https://reactrouter.com/en/main) for when you need **client side routing**
- [jotai](https://jotai.org) for when you don't want to use context for **state management** or need more state management outside of React Query
- [zustand](https://github.com/pmndrs/zustand) for when you need more **state management** outside of React Query or jotai if you wen that route
- [React Hook Form](https://react-hook-form.com) for when you need to build **forms**
- [TanStack Table (React Table)](https://tanstack.com/table/v8) for when you need to build complex **tables** or **data grids**
- [fathom](https://usefathom.com) for **analytics** which is easy to use

<!-- features references start -->

[vite]: https://vitejs.dev
[react]: https://react.dev
[TypeScript]: https://www.typescriptlang.org
[tailwindcss]: https://tailwindcss.com
[storybook]: https://storybook.js.org/
[eslint]: https://eslint.org
[vitest]: https://vitest.dev/guide/why.html
[Testing Library]: https://testing-library.com/docs/guiding-principles
[Playwright]: https://playwright.dev
[prettier]: https://prettier.io
[pnpm]: https://pnpm.io
[GitHub Actions]: https://github.com/features/actions

<!-- features references end -->
