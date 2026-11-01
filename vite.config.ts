import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed at https://areesha-saleem.github.io/ (user site => base "/")
export default defineConfig({
  plugins: [react()],
  base: "/",
});
