import fetch from "node-fetch";
import { WeatherCurrent } from "../interfaces/weathercurrent";
import { WeatherForecast } from "../interfaces/weatherforecast";
import getWindDirection from "../helpers/winddirection";
import getTemperatures from "../helpers/temperature";

const APPID = "7ba73e0eb8efe773ed08bfd0627f07b8";
const urlCurrent = "http://api.openweathermap.org/data/2.5/weather?";
const urlForecast = "http://api.openweathermap.org/data/2.5/forecast?";

export async function getCurrent(location: string) {
    const params = new URLSearchParams({
        q: location,
        APPID,
        units: "metric",
        lang: "pt_br",
    });
    const json = await fetch(urlCurrent + params).then(
        (res) => (res.json() as unknown) as WeatherCurrent
    );

    const { name, weather, main, sys } = json;
    const wind = { ...json.wind, dir: getWindDirection(json.wind.deg) };
    const temp = getTemperatures(main.temp);

    const response = {
        name,
        country: sys.country,
        icon: weather[0].icon,
        description: weather[0].description,
        temp,
        pressure: main.pressure,
        humidity: main.humidity,
        wind,
    };

    return response;
}

export async function getForecast(location: string) {
    const params = new URLSearchParams({
        q: location,
        APPID,
        units: "metric",
        lang: "pt_br",
    });
    const json = await fetch(urlForecast + params).then(
        (res) => (res.json() as unknown) as WeatherForecast
    );

    return json;
}
