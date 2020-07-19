import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_OPENCAGE_URL,
});

const getLocationName = async (coordinates: number[]) => {
    const response: AxiosResponse = await api.get(
        `/geocode/v1/json?key=${process.env.REACT_APP_OPENCAGE_APIKEY}&language=pt_BR&q=${coordinates[0]},${coordinates[1]}`
    );
    const { results } = response.data;
    return results[0].components.city;
};

export default getLocationName;
