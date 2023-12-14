# Website v1.0.0 - Vue 3

**Description:** This is my official website.

**Collaboration Invitation:** If you're interested in collaborating, simply clone the project, incorporate your modifications, and submit a pull request to contribute to its evolution.

[Site](https://main--adrydev-website.netlify.app/)

## Table of Contents

1. [Versioning](#versioning)
2. [Preview](#preview)
3. [Contributors](#contributors)
4. [Project Setup](#project-setup)
   - [Install Dependencies](#install-dependencies)
   - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
   - [Type-Check, Compile and Minify for Production](#type-check-compile-and-minify-for-production)
   - [Run Unit Tests with Vitest](#run-unit-tests-with-vitest)
   - [Run End-to-End Tests with Cypress](#run-end-to-end-tests-with-cypress)
   - [Lint with ESLint](#lint-with-eslint)

## Versioning

- **v1.0.0:**
  - Released by [AdryDev](https://github.com/Adrydevmateo)
  - **Contribution:** Built the website.

## Preview

- ![white theme](/public/home-w-theme.png)
- ![dark theme](/public/home-d-theme.png)

## Contributors

- [AdryDev](https://github.com/Adrydevmateo)
  - **Contribution:** Built the prototype/first version.
- [Another Contributor](https://github.com/Adrydevmateo)
  - **Contribution:** Added specific feature/functionality.
- [Another Contributor](https://github.com/anotherusername)
  - **Contribution:** Improved specific aspect and fixed bug/issue.

## Project Setup

### Install Dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
