import { Router } from "express";
import { getCurrentUser } from "./users.controller";
import { requireAuth } from "../../middleware";

const endpoint = "/users";
const usersRouter = Router();

usersRouter.get(`${endpoint}/current`, requireAuth, getCurrentUser);

export default usersRouter;
