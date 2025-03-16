import ApiError from "../classes/ApiError";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { getUserByClerkId, insertUser } from "../modules/users/users.data";
import { getClerkUser } from "../utils/clerk";
import { getAuth } from "@clerk/express";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { userId: clerkId } = getAuth(req);

    if (!clerkId) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized");
    }

    // Check if the user exists in the database
    let user = await getUserByClerkId(clerkId);

    if (!user) {
      // Create the user if they don't exist
      const clerkUser = await getClerkUser(clerkId);

      const result = await insertUser({
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0].emailAddress,
      });

      user = result[0];
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    next(
      new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Failed to check and create user",
      ),
    );
  }
};
