import React from "react";
import "./styles.scss";
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
        <div id="current-box" style={{ background: `rgba(${rgb},${alpha})` }}>
            <img id="weather-icon" src={iconImg} alt="weather-icon" />
            <div id="current-grid">
                <div>
                    <span>{dayText}</span>
                </div>
                <div>
                    <span id="temp_text" onClick={onClickTemp}>
                        {temperature}
                    </span>
                </div>
                <div id="desc-text">
                    <span>{description}</span>
                </div>
                <div>
                    <span>{wind}</span>
                </div>
                <div>
                    <span>{humidity}</span>
                </div>
                <div>
                    <span>{pressure}</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCurrent;
