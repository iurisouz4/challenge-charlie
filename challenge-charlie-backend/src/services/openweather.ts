import fetch from "node-fetch";
import IWeather from "../interfaces/weather";
import WeatherCurrent from "../interfaces/weathercurrent";
import WeatherForecast, { List, City } from "../interfaces/weatherforecast";
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

    const response: IWeather = {
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

    const tomorrow: IWeather = getWeather(json.list[7], json.city);
    const aftertomorrow: IWeather = getWeather(json.list[15], json.city);

    return [tomorrow, aftertomorrow];
}

function getWeather(forecast: List, city: City) {
    const { name, country } = city;
    const { icon, description } = forecast.weather[0];
    const temp = getTemperatures(forecast.main.temp);
    const { pressure, humidity } = forecast.main;
    const wind = {
        ...forecast.wind,
        dir: getWindDirection(forecast.wind.deg),
    };

    return {
        name,
        country,
        icon,
        description,
        temp,
        pressure,
        humidity,
        wind,
    };
}
