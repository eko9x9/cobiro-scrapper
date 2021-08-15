import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import fs from "fs";
import customingScrapp from "../libs/customingScrapp";
import createFileForCache from "../libs/createFileForCache";
import getDirCached from "../libs/getDirCached";
import MikroOrmInjector from "../libs/mikro-orm/inject";
import dotenv from "dotenv";
import constant from "../utils/constant";
import routes from "./routes";
dotenv.config();

// app.use(MikroOrmInjector);

app.use("/wedding", routes.weddingRoutes);

server.listen(constant.PORT_SERVER, () => {
    console.log("sv run")
});