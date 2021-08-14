import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import fs from "fs";
import customingScrapp from "../libs/customingScrapp";
import createFileForCache from "../libs/createFileForCache";
import getDirCached from "../libs/getDirCached";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";

// app.use(async(req, res, next) => {
//     const orm = await MikroORM.init(mikroOrmConfig);
//     await orm.getMigrator().up();
//     RequestContext.create(orm.em, next);
// })

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

server.listen(4000, () => {
    console.log("sv run")
});