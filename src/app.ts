import 'dotenv/config';
import * as Express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes/index";
import { connectMongoDB } from "./utils/mongoose";

class App {
  public app: Express.Application;
  constructor() {
    this.app = Express();
    this.config();
  }
  private async config() {
    await connectMongoDB();
    this.app.use(bodyParser.json());
    this.app.use(routes)
  }
}

export default new App().app;
