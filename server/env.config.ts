import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z
    .preprocess((val) => parseInt(val as string, 10), z.number())
    .default(3000),
  CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

type Env = z.infer<typeof envSchema>;

const parseEnv = (): Env => {
  try {
    // Attempt to parse and validate the environment variables
    // Directly return the parsed result, which TypeScript will recognize as type Env
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      // If validation fails, format and throw a new error with a detailed message
      const errorMessages = error.issues
        .map(
          (issue) =>
            `  🛑 Env Variable: ${issue.path[0]} has an issue: ${issue.message}`,
        )
        .join("\n");
      console.error(`Environment variable validation error:\n${errorMessages}`);
      process.exit(1);
    }
    // For any other unexpected error, log it and exit.
    console.error(
      "An unexpected error occurred during environment validation.",
    );
    process.exit(1);
  }
};

// Validate the environment variables
const env = parseEnv();

export default env;
