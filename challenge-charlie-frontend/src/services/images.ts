import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333",
});

const getBackgroundImage = async () => {
    const response: AxiosResponse = await api.get("/images");
    const { data } = response.data;
    return data.imageUrl;
};

export default getBackgroundImage;
