import express from "express";

const app = express();

app.use(express.json());

app.get("/weather", (req, res) => {
    res.status(200).send({ message: "OK" });
});

app.get("/imageoftheday", (req, res) => {
    res.status(200).send({ message: "OK" });
});

app.listen(3333);
