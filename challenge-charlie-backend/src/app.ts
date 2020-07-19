import express from "express";
import cors from "cors";
import images from "./routes/images";
import weather from "./routes/weather";

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(images);
app.use(weather);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
