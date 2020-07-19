import React from "react";
import Input from "../Input";
import getWeather from "../../services/weather";

export default function Weather() {
    async function handleWeather(location: string) {
        if (location) {
            const weather = await getWeather(location);
            console.log(weather.data.current.temp.celsius);
        }
    }

    return (
        <>
            <Input onWeatherChange={handleWeather} />
        </>
    );
}
