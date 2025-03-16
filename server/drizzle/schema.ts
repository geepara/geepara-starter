import {
  uniqueIndex,
  pgTable,
  serial,
  varchar,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["ADMIN", "USER"]);

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    clerkId: varchar("clerk_id", { length: 64 }).notNull().unique(),
    email: varchar("email", { length: 128 }).notNull().unique(),
    firstName: varchar("first_name", { length: 128 }),
    lastName: varchar("last_name", { length: 128 }),
    userRole: userRoleEnum("user_role").default("USER").notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      precision: 3,
    })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", {
      withTimezone: true,
      precision: 3,
    }).$onUpdate(() => new Date()),
  },
  (table) => {
    return {
      clerkIdIdx: uniqueIndex("clerk_id_idx").on(table.clerkId),
    };
  },
);
