import cheerio from "cheerio";
import getRawData from "./getRawData";

// Your customing and extracting data
const customingScrapp = async (url: string) => {
    const html = await getRawData(url);
    const parsedHtml = await cheerio.load(html);
    const links = await parsedHtml('link');
    const script = await parsedHtml("script");
    const section = await parsedHtml("section");

    // Fix invalid href url
    links.map((i: any, e: any) => {
        const explodeHref = parsedHtml(e).attr("href")?.split("//")
        if(explodeHref?.length === 1) {
            parsedHtml(e).replaceWith(`<link rel="stylesheet" href="${url}${explodeHref[0]}" />`)
        }
    });
    
    // Fix invalid href url
    script.map((i: any, e: any) => {
        const explodeSrcScript = parsedHtml(e).attr("src")?.split("//");
        if(explodeSrcScript?.length === 1){
            parsedHtml(e).replaceWith(`<script src="${url}${explodeSrcScript[0]}" ></script>`);
        }
    })

    // Deleting copyright
    section.map((i: any, e: any) => {
        const getCopyRight = parsedHtml(e).find("p").text();
        if(getCopyRight == "Built with "){
            parsedHtml(e).remove()
        }
    });

    return parsedHtml;
}

export default customingScrapp;