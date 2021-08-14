import fs from "fs";
import getDirCached from "./getDirCached";

// Save file to html
const createFileForCacheScrapped = async (url: string, data: any) => {

    await fs.appendFile(`${getDirCached(url)}`, data, function (err: any) {
        if (err) throw err;
        console.log(`Html scrapping saved on ${getDirCached(url)} at (${new Date()})`);
        return;
    });

    return;
}

export default createFileForCacheScrapped