import express from "express";
const router = express.Router();

router.get("/images", async (_, res) => {
    try {
        const image = {
            data: { url: "" },
            message: "Imagem do dia buscada com sucesso.",
        };
        res.send(image);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
