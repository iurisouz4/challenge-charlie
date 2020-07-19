import React from "react";
import { Box, Grid } from "@material-ui/core";
import "./styles.scss";

interface Props {
    dayText: string;
    temperature: string;
    rgb: string;
    alpha: string;
    onClickTemp: () => void;
}

const WeatherForecast: React.FC<Props> = ({
    dayText,
    temperature,
    rgb,
    alpha,
    onClickTemp,
}) => {
    return (
        <Box
            display="flex"
            id="forecast-box"
            p={3}
            alignContent="center"
            style={{ background: `rgba(${rgb},${alpha})` }}
        >
            <Grid
                id="forecast-grid"
                container
                direction="column"
                alignItems="flex-end"
                spacing={1}
            >
                <Grid item>
                    <span>{dayText}</span>
                </Grid>
                <Grid item>
                    <span id="temp_text" onClick={onClickTemp}>
                        {temperature}
                    </span>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WeatherForecast;
