import React, { useEffect, useState } from "react";
import "./styles.css";
import getBackground from "../../services/images";
import Weather from "../../components/Weather";

const Home = () => {
    const [bg, setBg] = useState("");

    //set background image from bing on initialization
    useEffect(() => {
        async function initBG() {
            const img = await getBackground();
            setBg(img);
        }
        initBG();
    }, []);

    return (
        <div
            className="page-home"
            style={{
                backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.7), 
                rgba(0, 0, 0, 0.7)
              ), url(${bg})`,
            }}
        >
            <Weather />
        </div>
    );
};

export default Home;
