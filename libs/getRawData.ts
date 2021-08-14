import fetch from "node-fetch";

const getRawData = (url: any) => {
    return fetch(url).then((response: any) => response.text()).then((data: any) => {
        return data;
    });
};

export default getRawData