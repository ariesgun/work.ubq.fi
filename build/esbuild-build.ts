<<<<<<< HEAD
import { config } from "dotenv";
import esbuild from "esbuild";
import { invertColors } from "./plugins/invert-colors";
import { pwaManifest } from "./plugins/pwa-manifest";
import { execSync } from "child_process";
config();

const typescriptEntries = ["src/home/home.ts", "src/progressive-web-app.ts"];
const cssEntries = ["static/style/style.css"];
const entries = [...typescriptEntries, ...cssEntries, "static/manifest.json", "static/favicon.svg", "static/icon-512x512.png"];

export const esBuildContext: esbuild.BuildOptions = {
  plugins: [invertColors, pwaManifest],
=======
import esbuild from "esbuild";
const typescriptEntries = ["static/main.ts"];
// const cssEntries = ["static/style.css"];
const entries = [
  ...typescriptEntries,
  //  ...cssEntries
];

export const esBuildContext: esbuild.BuildOptions = {
>>>>>>> template/main
  sourcemap: true,
  entryPoints: entries,
  bundle: true,
  minify: false,
  loader: {
    ".png": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".eot": "dataurl",
    ".ttf": "dataurl",
    ".svg": "dataurl",
<<<<<<< HEAD
    ".json": "dataurl",
  },
  outdir: "static/dist",
  define: createEnvDefines(["SUPABASE_URL", "SUPABASE_ANON_KEY"], {
    SUPABASE_STORAGE_KEY: generateSupabaseStorageKey(),
    GIT_REVISION: execSync(`git rev-parse --short HEAD`).toString().trim(),
    NODE_ENV: process.env.NODE_ENV || "development",
  }),
=======
  },
  outdir: "static/dist",
>>>>>>> template/main
};

esbuild
  .build(esBuildContext)
<<<<<<< HEAD
  .then(() => console.log("\tesbuild complete"))
  .catch(console.error);

function createEnvDefines(environmentVariables: string[], generatedAtBuild: Record<string, unknown>): Record<string, string> {
  const defines: Record<string, string> = {};
  for (const name of environmentVariables) {
    const envVar = process.env[name];
    if (envVar !== undefined) {
      defines[name] = JSON.stringify(envVar);
    } else {
      throw new Error(`Missing environment variable: ${name}`);
    }
  }
  for (const key in generatedAtBuild) {
    if (Object.prototype.hasOwnProperty.call(generatedAtBuild, key)) {
      defines[key] = JSON.stringify(generatedAtBuild[key]);
    }
  }
  return defines;
}

export function generateSupabaseStorageKey(): string | null {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  if (!SUPABASE_URL) {
    console.error("SUPABASE_URL environment variable is not set");
    return null;
  }

  const urlParts = SUPABASE_URL.split(".");
  if (urlParts.length === 0) {
    console.error("Invalid SUPABASE_URL environment variable");
    return null;
  }

  const domain = urlParts[0];
  const lastSlashIndex = domain.lastIndexOf("/");
  if (lastSlashIndex === -1) {
    console.error("Invalid SUPABASE_URL format");
    return null;
  }

  return domain.substring(lastSlashIndex + 1);
}
=======
  .then(() => {
    console.log("\tesbuild complete");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
>>>>>>> template/main
