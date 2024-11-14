# TypeScript Backend Boilerplate

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

1. Clone the repository:

   ```sh
   git clone https://github.com/Bigdil25007/typescript-boilerplate-frontend.git
   ```

2. Navigate to the project directory:

   ```sh
   cd typescript-boilerplate
   ```

3. Install dependencies:

   ```sh
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

### Test Locallly

To test on a local server:

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

.
├── .editorconfig # Editor configuration
├── .eslintrc.cjs # ESLint configuration
├── .gitignore # Git ignore file
├── .husky # Husky configuration
│ └── pre-commit # Pre-commit hook
├── .nvmrc # Node version manager configuration
├── .prettierignore # Prettier ignore file
├── .prettierrc # Prettier configuration
├── [package.json](http://_vscodecontentref_/0) # NPM package configuration
├── [tsconfig.json](http://_vscodecontentref_/1) # TypeScript configuration
├── [vite.config.js](http://_vscodecontentref_/2) # Vite configuration
├── vitest.config.ts # Vitest configuration
├── src # Source code
│ ├── main.ts # Main entry point
│ ├── main.test.ts # Example test file
│ └── [vite-env.d.ts](http://_vscodecontentref_/3) # TypeScript environment definitions
└── README.md # Project documentation

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
