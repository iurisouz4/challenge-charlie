import React from "react";
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
        <div id="forecast-box" style={{ background: `rgba(${rgb},${alpha})` }}>
            <div id="forecast-grid">
                <div>
                    <span>{dayText}</span>
                </div>
                <div>
                    <span id="temp_text" onClick={onClickTemp}>
                        {temperature}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WeatherForecast;
