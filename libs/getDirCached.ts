const dirChace = "./temp/scrapped/";
const getSaveFile = (url: string) => `${url.split("//")[1]}.html`;

export default function(url: string){
    return dirChace + getSaveFile(url);
}