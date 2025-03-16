import { User, clerkClient } from "@clerk/express";

export const getClerkUser = async (userId: string): Promise<User> => {
  return await clerkClient.users.getUser(userId);
};

export const deleteClerkUsers = async (userIds: string[]): Promise<void> => {
  for (const userId of userIds) {
    await clerkClient.users.deleteUser(userId);
  }
};
