import React, { useState, useEffect } from "react";
import { useTheme, useThemeUpdate } from "../../../ThemeContext";
import BootCarousel from "../Home/components/BootCarousel";
// import Carousel from "react-material-ui-carousel";
import Carousel from 'react-bootstrap/Carousel';
import { Paper, Button } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = (props) => {
    const darkTheme = useTheme();
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        borderRadius: "20px",
        padding: "20px",
    };

    return (
        <div>
            <div>
                <BootCarousel/>
            </div>
        </div>
    );
};

export default AboutMe;
