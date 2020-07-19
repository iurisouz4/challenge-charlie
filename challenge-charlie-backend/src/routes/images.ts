import express from "express";
import getImageOfTheDay from "../services/bing";
const router = express.Router();

router.get("/images", async (_, res) => {
    try {
        const imageUrl = await getImageOfTheDay();
        const json = {
            data: { imageUrl },
            message: "Image of the day retrieved sucessfully.",
        };
        res.send(json);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
