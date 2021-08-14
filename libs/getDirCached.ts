const dirCache = "./temp/scrapped/";
const getSaveFile = (url: string) => `${url.split("//")[1]}.html`;

export default function(url: string){
    return dirCache + getSaveFile(url);
}