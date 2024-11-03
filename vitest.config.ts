import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Pas besoin de faire les imports pour describe, it, etc.
    environment: "jsdom", // Environnement de simulation de navigateur pour les tests frontend (accès au DOM)
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: ["node_modules", "dist", "coverage", "public"],
    coverage: {
      provider: "istanbul", // Utilisation de istanbul pour la couverture de code
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.d.ts"],
    },
    testTimeout: 30000, // Timeout global (en millisecondes)
    maxConcurrency: 5, // Nombre maximum de tests à exécuter en parallèle
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
