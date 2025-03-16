import { Router } from "express";
import { userController } from "./users.controller";
import { requireAuth } from "../../middleware";

const endpoint = "/users";
const usersRouter = Router();

usersRouter.get(
  `${endpoint}/current`,
  requireAuth,
  userController.getCurrentUser,
);

export default usersRouter;
