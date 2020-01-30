import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from "@tsed/common";
import * as bodyParser from "body-parser";

const compression = require("compression");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const rootDir = __dirname;

@ServerSettings({
  rootDir,
  mount: {
    "/": "${rootDir}/controllers/**/*{.ts,.js}"
  },
  componentsScan: [
    "${rootDir}/services/**/*{.ts,.js}"
  ],
  acceptMimes: ["application/json"],
  port: 3000,
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compression({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));
  }
}
