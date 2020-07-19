import express from "express";
import { getCurrent, getForecast } from "../services/openweather";
const router = express.Router();

router.get("/weather", async (req, res) => {
    try {
        if (!req.query.location) {
            res.status(400).send({ message: "Please, inform location name." });
        }
        const locationName = req.query.location;
        //const forecast = await getForecast(locationName as string, "metric");
        const current = await getCurrent(locationName as string);
        //const tomorrow = forecast[0];
        //const afterTomorrow = forecast[1];

        const weather = {
            data: { current, tomorrow: "", afterTomorrow: "" },
            message: `Weather from '${locationName}' retrieved sucessfully.`,
        };
        res.send(weather);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
