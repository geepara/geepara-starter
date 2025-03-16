import { Router } from "express";
import usersRouter from "./modules/users/users.router";

const router = Router();

// Add more routes here
router.use("/", usersRouter);

export default router;
