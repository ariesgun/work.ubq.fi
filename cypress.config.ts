import { defineConfig } from "cypress";
<<<<<<< HEAD
import { config } from "dotenv";
import { generateSupabaseStorageKey } from "./build/esbuild-build";

config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const SUPABASE_STORAGE_KEY = generateSupabaseStorageKey();
      config.env = {
        ...process.env,
        ...config.env,
        SUPABASE_STORAGE_KEY,
      };
      return config;
    },
    baseUrl: "http://localhost:8080",
    experimentalStudio: true,
  },
  viewportHeight: 900,
  viewportWidth: 1440,
  watchForFileChanges: false,
  video: true,
=======

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    experimentalStudio: true,
    baseUrl: "http://localhost:8080",
  },
>>>>>>> template/main
});
