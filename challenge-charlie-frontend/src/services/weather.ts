import axios, { AxiosResponse } from "axios";
import { Weather } from "../interfaces/weather";

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
});

const getWeather = async (location: string) => {
    const response: AxiosResponse = await api.get(
        `/weather?location=${location}`
    );
    return response.data as Weather;
};

export default getWeather;
