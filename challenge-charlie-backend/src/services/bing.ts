import fetch from "node-fetch";
const domain = "https://www.bing.com";
const route = "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";

export interface Image {
    startdate: string;
    fullstartdate: string;
    enddate: string;
    url: string;
    urlbase: string;
    copyright: string;
    copyrightlink: string;
    title: string;
    quiz: string;
    wp: boolean;
    hsh: string;
    drk: number;
    top: number;
    bot: number;
    hs: any[];
}

export interface Tooltips {
    loading: string;
    previous: string;
    next: string;
    walle: string;
    walls: string;
}

export interface Bing {
    images: Image[];
    tooltips: Tooltips;
}

async function getImageOfTheDay() {
    const json = await fetch(`${domain}${route}`).then(
        (res) => (res.json() as unknown) as Bing
    );
    const imageUrl = json.images[0].url;
    return `${domain}${imageUrl}`;
}

export default getImageOfTheDay;
