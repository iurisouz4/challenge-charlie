import React from "react";
import Input from "../Input";
import getWeather from "../../services/weather";
import WeatherForecast from "../WeatherForecast";

export default function Weather() {
    async function handleWeather(location: string) {
        if (location) {
            const weather = await getWeather(location);
            console.log(weather.data.current.temp.celsius);
        }
    }

    function handleClickTemp() {}

    return (
        <>
            <Input onWeatherChange={handleWeather} />
            <WeatherForecast
                dayText={"Amanhã"}
                temperature={"25º"}
                rgb={"255,228,0"}
                alpha="0.6"
                onClickTemp={handleClickTemp}
            />
            <WeatherForecast
                dayText={"Depois de amanhã"}
                temperature={"25º"}
                rgb={"255,228,0"}
                alpha="0.5"
                onClickTemp={handleClickTemp}
            />
        </>
    );
}
