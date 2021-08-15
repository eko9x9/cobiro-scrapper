import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import fs from "fs";
import customingScrapp from "../libs/customingScrapp";
import createFileForCache from "../libs/createFileForCache";
import getDirCached from "../libs/getDirCached";
import { RequestContext } from "@mikro-orm/core";
import MikroOrmInjector from "../libs/mikro-orm/inject";
import dotenv from "dotenv";
import constant from "../utils/constant";
dotenv.config();

app.use(MikroOrmInjector);

const URL = "https://187572.smb.site";

app.get("/", async (req, res) => {
    const parsedHtml = await customingScrapp(URL);

    if(fs.existsSync(getDirCached(URL))){
        const htmlFileCached: string = await fs.readFileSync(getDirCached(URL), "utf-8");

        if(htmlFileCached.split("DOCTYPE").length > 1){
            console.log(`Send cached at (${new Date()})`);
            res.send(htmlFileCached);
        }
    }else {
        await createFileForCache(URL, parsedHtml.html());
        res.send(parsedHtml.html());
    }

})

server.listen(constant.PORT_SERVER, () => {
    console.log("sv run")
});