import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import ApiError from "../classes/ApiError";
import { ZodError } from "zod";

export const globalErrorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err) {
    console.error(err);
    if (err instanceof ApiError) {
      res.status(err.status).json({
        message: err.message,
      });
    } else if (err instanceof ZodError) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Invalid request data",
      });
    } else if (err.message === "Unauthenticated") {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: ReasonPhrases.UNAUTHORIZED });
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
    return;
  }
  next();
};
