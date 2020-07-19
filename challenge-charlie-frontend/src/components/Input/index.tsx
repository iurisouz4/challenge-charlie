import React, { useEffect, useState, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import "./styles.scss";
import { Box } from "@material-ui/core";
import getLocationName from "../../services/opencage";

interface Props {
    onWeatherChange: (location: string) => void;
}

const Input: React.FC<Props> = ({ onWeatherChange }) => {
    const [locationName, setLocationName] = useState("");

    // get actual coordinates from client
    // then do reverse geocode with open cage
    // to get location name
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            setLocationName(await getLocationName([latitude, longitude]));
        });
    }, []);

    // get weather in the selected location
    useEffect(() => {
        onWeatherChange(locationName);
    }, [locationName, onWeatherChange]);

    function handleUserInput(event: ChangeEvent) {
        setLocationName((event.target as HTMLInputElement).value);
    }

    return (
        <Box
            display="flex"
            id="input-box"
            p={3}
            alignContent="center"
            style={{ background: "rgba(255,255,255,0.6)" }}
        >
            <Box mr={2}>
                <ExploreOutlinedIcon
                    style={{ width: "60px", height: "60px" }}
                />
            </Box>
            <Box flexGrow={1}>
                <TextField
                    id="input-local"
                    fullWidth
                    value={locationName}
                    onChange={handleUserInput}
                />
            </Box>
        </Box>
    );
};

export default Input;
