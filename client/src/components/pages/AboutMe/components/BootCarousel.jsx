import React, { useState, useEffect } from 'react';
import { useTheme, useThemeUpdate } from "../../../../ThemeContext";
import Carousel from 'react-bootstrap/Carousel';
import "../styles/BootCarousel.css";

const BootCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const darkTheme = useTheme();
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        borderRadius: "20px",
        padding: "20px",
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "75%" }} controls={true} variant={darkTheme ? "" : "dark"} interval="10000">
            <Carousel.Item as="div" style={themeStyles}>
                <h3>Hire Me Because…</h3>
                <p style={{ paddingLeft: "32px", paddingRight: "32px" }}>
                    I have over 11 years of troubleshooting and problem-solving
                    experience. I see myself as a partner rather than an employee.
                    Meaning, I feel the success of the company I work with is directly
                    tied to the product and accomplishments I provide to the company. I am
                    a dedicated, focused, and punctual individual that will not accept
                    failure on my behalf.
                </p>
                <br />
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item'>

                </div>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item'>

                </div>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BootCarousel;