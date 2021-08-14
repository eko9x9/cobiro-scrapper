import fs from "fs";
import getDirCached from "./getDirCached";

// Save file to html
const createFileForCacheScrapped = (url: string, data: any) => {
    fs.appendFile(`./temp/scrapped/${url.split("//")[1]}.html`, data, function (err: any) {
        if (err) throw err;
        console.log(`Html scrapping saved on ${getDirCached(url)} at (${new Date()})`);
        return;
    });

    return;
}

export default createFileForCacheScrapped