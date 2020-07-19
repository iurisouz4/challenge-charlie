import React from "react";
import "./styles.scss";
import { Box, Grid } from "@material-ui/core";
import iconImg from "../../assets/icons/2.svg";

interface Props {
    dayText: string;
    temperature: string;
    rgb: string;
    alpha: string;
    icon?: string;
    description?: string;
    wind?: string;
    humidity?: string;
    pressure?: string;
    onClickTemp: () => void;
}

const WeatherCurrent: React.FC<Props> = ({
    dayText,
    temperature,
    rgb,
    alpha,
    icon,
    description,
    wind,
    humidity,
    pressure,
    onClickTemp,
}) => {
    return (
        <Box
            display="flex"
            id="current-box"
            p={3}
            height="100%"
            alignContent="center"
            style={{ background: `rgba(${rgb},${alpha})` }}
        >
            <Grid
                id="current-grid"
                container
                direction="row"
                spacing={2}
                alignItems="flex-end" justify="flex-end"
            >
                <Grid item>
                    <img src={iconImg} alt="weather-icon" />
                </Grid>
                <Grid direction="column" alignContent="flex-end">
                    <Grid container alignItems="flex-end" justify="flex-end">
                        <span>{dayText}</span>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="flex-end">
                        <span id="temp_text" onClick={onClickTemp}>
                            {temperature}
                        </span>
                    </Grid>
                    <Grid
                        container
                        alignItems="flex-end"
                        justify="flex-end"
                        id="desc-text"
                    >
                        <span>{description}</span>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="flex-end">
                        <span>{wind}</span>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="flex-end">
                        <span>{humidity}</span>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="flex-end">
                        <span>{pressure}</span>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WeatherCurrent;
