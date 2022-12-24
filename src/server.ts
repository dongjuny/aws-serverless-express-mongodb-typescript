import * as serverless from "serverless-http";
import app from "./app";

module.exports.handler = serverless(app);
