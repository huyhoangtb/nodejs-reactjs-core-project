import "reflect-metadata";
import * as express from 'express';
import {useExpressServer, useContainer} from "routing-controllers";
import ApplicationSecurity from "./core/application/ApplicationSecurity";
import MongoDB from "./core/connections/mongodb";
import "./controllers/socket/TestController"; // we need to "load" our controller before call createSocketServer. this is required
import "es6-shim"; // this shim is optional if you are using old version of node
import "reflect-metadata"; // this shim is required
import {createSocketServer} from "socket-controllers";
import {Container} from "typedi";
import {ExceptionHandle} from "./core/middleware/web/ExceptionHandle";

declare let __dirname: string;

let app = express();

const mongodb = new MongoDB();
mongodb.makeConnection();

useContainer(Container);

const appSecurity = new ApplicationSecurity();
app = appSecurity.initOauth2Server(app);

useExpressServer(app, {
    routePrefix: "/api/v1",
    cors: true,
    // defaultErrorHandler: false,
    controllers: [__dirname + "/controllers/web-api/*.ts", __dirname + "/core/controllers/web-api/*.ts"],
    // middlewares: [__dirname + "/core/middleware/web"],
    middlewares: [ExceptionHandle],
    authorizationChecker: appSecurity.authorizationChecker
});

createSocketServer(3002, {
    controllers: [__dirname + "/controllers/socket/*.ts"]
}); // registers all given controllers

app.listen(3001, function () {
    console.log(`listening on *: port 3001`);
}); // register controllers routes in our express application
