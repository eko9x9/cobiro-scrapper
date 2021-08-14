import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import fs from "fs";
import customingScrapp from "../libs/customingScrapp";
import createFileForCache from "../libs/createFileForCache";
import getDirCached from "../libs/getDirCached";

// app.use(async(req, res, next) => {
//     RequestContext.create(await orm.em, next);
// })

const URL = "https://187572.smb.site";

app.get("/", async (req, res) => {
    const parsedHtml = await customingScrapp(URL);
    const htmlFileCached = await fs.readFileSync(getDirCached(URL), "utf-8");
    
    if(htmlFileCached == ""){
        console.log(`Send cached`);
        res.send(htmlFileCached);
    }else {
        await createFileForCache(URL, parsedHtml.html());
        res.send(parsedHtml.html());
    }

})

server.listen(3000, () => {
    console.log("sv run")
});