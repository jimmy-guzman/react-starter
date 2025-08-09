# React Starter

> 🍱 Another React Starter using Bun, Vite, TypeScript, tailwindcss and daisyUI.

## 🐣 Features

- 🍞 [bun][bun] for a fast runtime and package manager.
- ⚡️ [vite][vite] for instant server start and lighting fast HMR.
- 🏷️ [TypeScript][TypeScript] for a less frustrating & consistent experience.
- 🏝️ [TanStack Router][TanStack Router] for a fully type-safe React router.
- 🏝️ [TanStack Query][TanStack Query] for asynchronous state management.
- 💄 [tailwindcss][tailwindcss] for utility-first CSS.
- 💄 [daisyUI](https://daisyui.com) for tailwindcss components.
- 🧪 [vitest][vitest] for fast testing.
- 🧪 [Playwright][Playwright] for fast and reliable e2e testing.
- 🧪 [Mock Service Worker][Mock Service Worker] for client-agnostic API mocks.
- 🩺 [eslint][eslint] for static analysis.
- 🩺 [Knip][Knip] for finding dead code.
- 🎨 [prettier][prettier] for formatting.
- 🩺 [lefthook][lefthook] for fast Git hooks management.
- 👷 [Turborepo][Turborepo] for caching and task parallelization.
- 👷 [GitHub Actions][GitHub Actions] for easy workflow automation.
- 🔒️ [Dependabot][Dependabot] for monitoring vulnerabilities and keeping dependencies up-to-date.

## 🛠️ Usage

You can either [use this template](https://github.com/jimmy-guzman/react-starter/generate) or [deploy on Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjimmy-guzman%2Freact-starter&project-name=my-awesome-react-project&repository-name=my-awesome-react-project) or use [tiged](https://github.com/tiged/tiged), by running the following command:

```
bunx tiged jimmy-guzman/react-starter
```

## 🏁 Getting Started

First install [bun](https://bun.sh/docs/installation), by running the following command:

```
curl -fsSL https://bun.sh/install | bash
```

Now you can install dependencies, by running the following command:

```
bun install
```

Or if you already have `bun` installed you upgrade, by running the following command:

```
bun upgrade --stable
```

And to download new browsers for Playwright, run the following command:

```
bunx playwright install
```

And install Turborepo, run the following command:

```
bun install --global turbo
```

Then to run the development server, run the following command:

```
turbo dev
```

Your application will be available at http://localhost:5173/ ❤️

## 🧞 Available Tasks

| Command            | Action                                            |
| :----------------- | :------------------------------------------------ |
| `bun install`      | Installs dependencies                             |
| `turbo dev`        | Starts local dev server at http://localhost:5173/ |
| `turbo build`      | Build your production site to `./dist/`           |
| `turbo preview`    | Preview your build locally, before deploying      |
| `turbo test`       | Unit tests your code with vitest                  |
| `turbo e2e`        | E2E tests your code with playwright               |
| `turbo lint`       | Lints everything with eslint                      |
| `turbo lint:fix`   | Fixes lint errors with eslint                     |
| `turbo format`     | Checks formatting with prettier                   |
| `turbo format:fix` | Fixes formatting errors with prettier             |
| `turbo typecheck`  | Checks types with TypeScript                      |
| `turbo check`      | Checks everything                                 |

_You can also run all tasks with `bun run`, i.e `bun run dev`_

<!-- features references start -->

[vite]: https://vite.dev
[react]: https://react.dev
[TypeScript]: https://www.typescriptlang.org
[tailwindcss]: https://tailwindcss.com
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
[Turborepo]: https://turbo.build/repo/docs
[Mock Service Worker]: https://mswjs.io
[Knip]: https://knip.dev
[Dependabot]: https://docs.github.com/en/code-security/dependabot

<!-- features references end -->
