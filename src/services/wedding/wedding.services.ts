import getDirCached from "../../../libs/getDirCached";
import customingScrapp from "../../../libs/customingScrapp";
import createFileForCacheScrapped from "../../../libs/createFileForCache";
import fs from "fs";

export class WeddingServices {
    /**
     * ScrappingHtml
     */
    public async ScrappingHtml(): Promise<any> {
        const URL = "https://187572.smb.site";

        const parsedHtml = await customingScrapp(URL);

        if(fs.existsSync(getDirCached(URL))){
            const htmlFileCached: string = await fs.readFileSync(getDirCached(URL), "utf-8");

            if(htmlFileCached.split("DOCTYPE").length > 1){
                console.log(`Send cached at (${new Date()})`);
                return (htmlFileCached);
            }
        }else {
            await createFileForCacheScrapped(URL, parsedHtml.html());
            return (parsedHtml.html());
        }
    }
}