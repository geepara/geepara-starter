/// <reference types="@clerk/express/env" />

import { InferSelectModel } from "drizzle-orm";
import { users } from "../drizzle/schema";

export type User = InferSelectModel<typeof users>;

/*
  This is a type that represents a validation schema for a request body or query.
  It is used in the validation middleware to validate incoming requests.   
 */
export type ValidationSchema = {
  body?: ZodSchema;
  query?: ZodSchema;
};
