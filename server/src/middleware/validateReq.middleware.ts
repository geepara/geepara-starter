/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { ValidationSchema } from "../../types";

export const validateReq =
  (schemaObject: ValidationSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemaObject.body) req.body = schemaObject.body.parse(req.body);
      if (schemaObject.query)
        req.query = schemaObject.query.parse(req.query) as any;

      next();
    } catch (error) {
      next(error);
    }
  };
