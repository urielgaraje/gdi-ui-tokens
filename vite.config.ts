import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/tokens.css",
      name: "TokensCSS",
      fileName: "tokens",
      formats: ["es"], // Exporta solo en formato ES Module
    }
  }
});