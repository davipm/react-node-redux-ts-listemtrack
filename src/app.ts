import express from "express";
import path from "path";
import cors from "cors";
import * as dotenv from "dotenv";
import database from "./config/db";
import morgan from "morgan";
import "colors";

// app routes
import exerciseRoute from "./routes/exercises";
import userRouter from "./routes/users";

class App {
  public express: express.Application;

  public constructor() {
    dotenv.config({ path: "./src/config/config.env" });
    this.express = express();
    this.middleware();
    this.routes();
    this.production();
    database.connectDatabase().then();
  }

  private middleware() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() {
    this.express.use(exerciseRoute);
    this.express.use(userRouter);
  }

  private production() {
    if (process.env.NODE_ENV === "development") {
      this.express.use(morgan("dev"));
    }

    if (process.env.NODE_ENV === "production") {
      this.express.use(express.static("src/client/build"));
      this.express.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }
  }
}

export default new App().express;
