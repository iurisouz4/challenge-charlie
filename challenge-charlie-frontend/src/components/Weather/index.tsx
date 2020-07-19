import React from "react";
import Input from "../Input";
import getWeather from "../../services/weather";
import WeatherForecast from "../WeatherForecast";
import WeatherCurrent from "../WeatherCurrent";
import { Box } from "@material-ui/core";

export default function Weather() {
    async function handleWeather(location: string) {
        if (location) {
            const weather = await getWeather(location);
            console.log(weather.data.current.temp.celsius);
        }
    }

    function handleClickTemp() {}

    return (
        <Box display="flex" flexDirection="column" height="100%">
            <Input onWeatherChange={handleWeather} />
            <WeatherCurrent
                dayText={"Hoje"}
                temperature={"25º"}
                description={"Ensolarado"}
                wind={"Vento: NO 6.4km/h"}
                humidity={"Umidade: 78%"}
                pressure={"Pressão: 1003hPA"}
                rgb={"255,255,0"}
                alpha="0.6"
                onClickTemp={handleClickTemp}
            />
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
        </Box>
    );
}
