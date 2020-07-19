import express from "express";
const router = express.Router();

router.get("/weather", async (_, res) => {
    try {
        const weather = {
            data: { today: "", tomorrow: "", afterTomorrow: "" },
            message: "Clima encontrado com sucesso.",
        };
        res.send(weather);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
