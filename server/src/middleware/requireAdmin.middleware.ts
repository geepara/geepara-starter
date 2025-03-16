import ApiError from "../classes/ApiError";
import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (req.user.userRole !== "ADMIN") {
      throw new ApiError(StatusCodes.FORBIDDEN, ReasonPhrases.FORBIDDEN);
    }
    next();
  } catch (error) {
    next(error);
  }
};
