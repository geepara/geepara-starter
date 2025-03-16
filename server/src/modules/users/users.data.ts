import { eq } from "drizzle-orm";
import { users } from "../../../drizzle/schema";
import { db } from "../../../drizzle";

type NewUser = typeof users.$inferInsert;

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};

export const getUserByClerkId = async (clerkId: string) => {
  return await db.query.users.findFirst({
    where: eq(users.clerkId, clerkId),
  });
};
