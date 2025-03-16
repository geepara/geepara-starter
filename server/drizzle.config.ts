import { defineConfig } from "drizzle-kit";
import env from "./env.config";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  out: "./drizzle/migrations",
  verbose: true,
  strict: true,
});
