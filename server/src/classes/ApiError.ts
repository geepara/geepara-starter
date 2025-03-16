import { StatusCodes } from "http-status-codes";

class ApiError extends Error {
  status: StatusCodes;
  isOperational: boolean;

  constructor(status: StatusCodes, message: string, isOperational = true) {
    super(message);
    this.status = status;
    this.isOperational = isOperational;

    // When extending a built-in class, it is necessary to set the prototype explicitly.
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export default ApiError;
