# React Starter

> 🍱 Another React Starter using Bun, Vite, TypeScript, tailwindcss and daisyUI.

## 🐣 Features

- 🍞 [bun][bun] for a fast runtime and package manager.
- ⚡️ [vite][vite] for instant server start and lighting fast HMR.
- ✨ [Vite PWA](https://vite-pwa-org.netlify.app) for PWAs with very little configuration.
- 🏷️ [TypeScript][TypeScript] for a less frustrating & consistent experience.
- 🏝️ [TanStack Router][TanStack Router] for a fully type-safe React router.
- 🏝️ [TanStack Query][TanStack Query] for asynchronous state management.
- 💄 [tailwindcss][tailwindcss] for utility-first CSS.
- 💄 [daisyUI](https://daisyui.com) for tailwindcss components.
- 🧱 [storybook][storybook] for building UIs in isolation.
- 🧪 [vitest][vitest] for fast testing.
- 🧪 [Playwright][Playwright] for fast and reliable e2e testing.
- 🧪 [msw](https://mswjs.io) for client-agnostic API mocks.
- 🩺 [eslint][eslint] for static analysis.
- 🎨 [prettier][prettier] for formatting.
- 🩺 [lefthook][lefthook] for fast Git hooks management.
- 👷 [GitHub Actions][GitHub Actions] for easy workflow automation.

## 🛠️ Usage

You can either [use this template](https://github.com/jimmy-guzman/react-starter/generate) or [deploy on Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjimmy-guzman%2Freact-starter&project-name=my-awesome-react-project&repository-name=my-awesome-react-project) or use [tiged](https://github.com/tiged/tiged), by running the following command:

```
bunx tiged jimmy-guzman/react-starter
```

## 🏁 Getting Started

_💡 To avoid having to remember which package manager to use, I recommended using [ni](https://github.com/antfu/ni)_

First install [bun](https://bun.sh/docs/installation), by running the following command:

```
curl -fsSL https://bun.sh/install | bash
```

Now you can install dependencies, by running the following command:

```
bun install
```

And to download new browsers for Playwright, run the following command:

```
bunx playwright install
```

Then to run the development server, run the following command:

```
bun dev
```

Your application will be available at http://localhost:5173/ ❤️

## 🧞 Available Tasks

| Command              | Action                                                   |
| :------------------- | :------------------------------------------------------- |
| `bun install`        | Installs dependencies                                    |
| `bun run dev`        | Starts local dev server at http://localhost:5173/        |
| `bun run build`      | Build your production site to `./dist/`                  |
| `bun run preview`    | Preview your build locally, before deploying             |
| `bun run test`       | Unit tests your code with vitest                         |
| `bun run e2e`        | E2E tests your code with playwright                      |
| `bun run lint`       | Lints everything with eslint                             |
| `bun run lint:fix`   | Fixes lint errors with eslint                            |
| `bun run format`     | Checks formatting with prettier                          |
| `bun run format:fix` | Fixes formatting errors with prettier                    |
| `bun run typecheck`  | Checks types with TypeScript                             |
| `bun run sb`         | Starts storybook at http://localhost:6006                |
| `bun run sb:build`   | Build your production storybook to `./storybook-static/` |

## 💡 Recommendations

If you need to do more, I recommend the following libraries:

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
[storybook]: https://storybook.js.org
[eslint]: https://eslint.org
[vitest]: https://vitest.dev/guide/why.html
[Testing Library]: https://testing-library.com/docs/guiding-principles
[Playwright]: https://playwright.dev
[prettier]: https://prettier.io
[bun]: https://bun.sh
[GitHub Actions]: https://github.com/features/actions
[lefthook]: https://github.com/evilmartians/lefthook
[TanStack Router]: https://tanstack.com/router/v1
[TanStack Query]: https://tanstack.com/query/v5

<!-- features references end -->
