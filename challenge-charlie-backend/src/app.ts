import express from "express";
import cors from "cors";
import images from "./routes/images";
import weather from "./routes/weather";
import dotenv from "dotenv";

if (
    dotenv.config({
        path: `env/${process.env.NODE_ENV}.env`,
    }).error
) {
    throw new Error(
        `Verify that ${process.env.NODE_ENV}.env file exists in the env folder`
    );
}

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(images);
app.use(weather);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
