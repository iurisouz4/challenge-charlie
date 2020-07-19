import express from "express";
import images from "./routes/imageoftheday";
import weather from "./routes/weather";

const app = express();

app.use(express.json());
app.use(images);
app.use(weather);

app.listen(3333);
