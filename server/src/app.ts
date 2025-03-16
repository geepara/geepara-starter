import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { globalErrorHandler } from "./middleware";
import { clerkMiddleware } from "@clerk/express";
import helmet from "helmet";
import env from "../env.config";
import router from "./routes";

dotenv.config();
const app: Application = express();

app.use(helmet());

app.use(
  cors({
    origin: "*",
  }),
);

app.disable("x-powered-by");

app.use(morgan("dev", { skip: () => env.NODE_ENV === "test" }));
app.use(express.json());

app.get("/", async (_req: Request, res: Response) => {
  res.status(200).send("Welcome to the geepara-starter API!");
});

app.use(clerkMiddleware());

app.use("/", router);
app.use(globalErrorHandler);

export default app;
