import React from "react";
import "./styles.scss";
import { Box } from "@material-ui/core";

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
        ></Box>
    );
};

export default WeatherCurrent;
