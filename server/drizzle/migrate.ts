import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./index";

async function main() {
  console.log("Migrating database...");
  await migrate(db, { migrationsFolder: "./drizzle/migrations" }); // the migrations folder is relative to the root of the project
  console.log("✅ Database migrated successfully!");

  process.exit(0);
}

main().catch((error) => {
  console.error("❌ Database migration failed:", error);

  process.exit(1);
});
