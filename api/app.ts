import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from 'dotenv';

import exerciseRoute from "./routes/exercises";
import userRouter from "./routes/users";

class App {
  public express: express.Application;

  public constructor() {
    dotenv.config({ path: './config.env' });
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
    this.database();
  }

  private middleware() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose
      .connect(
        `${process.env.MONGO_DB}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log("Database connected"))
      .catch((error) => console.log("Database error", error));
  }

  private routes() {
    this.express.use(exerciseRoute);
    this.express.use(userRouter);
  }
}

export default new App().express;
