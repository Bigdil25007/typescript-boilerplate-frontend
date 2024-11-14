# TypeScript Frontend Boilerplate

This is a boilerplate project for building frontend applications using Vite and TypeScript. It includes configurations for ESLint, Prettier, Husky, and Vitest.

## Features

- Vite for building and fast HMR
- TypeScript support
- ESLint for linting
- Prettier for code formatting
- Husky for Git hooks
- Vitest for testing

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)

### Installation

```sh
git clone https://github.com/Bigdil25007/typescript-boilerplate-frontend.git
cd typescript-boilerplate
npm install
```

### Building the Project

1. Build the project:

   ```sh
   npm run build
   ```

2. Test the build the server:

   ```sh
   npm run preview
   ```

### Local Development

```sh
npm run dev
```

### Running Tests

To run tests using Vitest:

```sh
npm run test
```

To generate a coverage report:

```sh
npm run coverage
```

### Linting and Formatting

To lint the code using ESLint:

```sh
npm run lint
```

To format the code using Prettier:

```sh
npm run format:all
```

### Git Hooks

Husky is configured to run linting, formatting, and tests before each commit. This ensures code quality and consistency.

### Customization

To customize the project, you can modify the following files:

- **TypeScript Configuration**: Modify `tsconfig.json` to change TypeScript compiler options.
- **ESLint Configuration**: Modify `.eslintrc.cjs` to change linting rules and settings.
- **Prettier Configuration**: Modify `.prettierrc` to change code formatting rules.
- **Husky Configuration**: Modify `.husky/pre-commit` to change pre-commit hooks.
- **EditorConfig**: Modify `.editorconfig` to change editor settings.
- **NPM Scripts**: Modify the `scripts` object in `package.json` to add or change npm scripts.

### Project Structure

```
.
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .husky
│   └── pre-commit
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── [package.json](http://_vscodecontentref_/0)
├── [tsconfig.json](http://_vscodecontentref_/1)
├── [vite.config.js](http://_vscodecontentref_/2)
├── vitest.config.ts
├── src
│   ├── main.ts
│   ├── main.test.ts
│   └── [vite-env.d.ts](http://_vscodecontentref_/3)
└── README.md
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
