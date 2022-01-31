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
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "90%" }} controls={true} variant={darkTheme ? "" : "dark"} interval="10000">
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
            <Carousel.Item as="div" style={themeStyles}>
                <h3>Passion For Programming</h3>
                <p style={{ paddingLeft: "32px", paddingRight: "32px" }}>
                    I am an addict of programming. Whether I’m looking at a website, a
                    piece of electronic equipment, or a toy, all I can think about is what
                    technologies, loops, arrays, or conditionals went into creating its
                    behavior. I will frequently find myself programing my own projects for
                    hours on end without realizing a moment has passed. Solving a problem
                    that previously seemed impossible gives me an abundance of thrill,
                    fulfillment, and motivation to continue!
                </p>
            </Carousel.Item>
            <Carousel.Item as="div" style={themeStyles}>
                <h3>Three Words About My Professional Qualities</h3>
                <div style={{ paddingLeft: "32px", paddingRight: "32px" }}>
                    <p>
                        <u><b>Persistent</b></u> : When presented with a problem I do not give up until I
                        find some kind of solution. There are so many ways to solve problems
                        and I will break down my issue and attack from every angle until I
                        have a viable solution to my problem or until I make it a
                        non-problem.
                    </p>
                    <p>
                        <u><b>Humble</b></u>: I am not afraid of humility or being wrong. I enjoy
                        constructive criticism and consider the advice given to me. I
                        believe the moment we are right about everything we will no longer
                        be on the frontier of innovation.
                    </p>
                    <p>
                        <u><b>Philomath</b></u>: I have a passion for learning. I believe receiving
                        mentorship is invaluable. I spend a minimum of three hours a day
                        listening or watching educational content, from programming to
                        astrophysics, to anthropology, and much more.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item as="div" style={themeStyles}>
                <h3>Three Words That Describe The Best Role For Me</h3>
                <div style={{ paddingLeft: "32px", paddingRight: "32px" }}>
                    <p><u><b>Challenging</b></u>: I am a natural problem solver and I am ready and willing to take on the complex task my team assigns to me.</p>
                    <p><u><b>Meaningful</b></u>: I want my work to be fulfilling.  I want to develop exceptional products that are easy to use, understand, and better the lives of consumers.</p>
                    <p><u><b>Growth</b></u>: I want to be in a position where I can absorb knowledge from my mentors and peers.  I am eager to learn and grow as a developer to make the best products I am capable of creating.</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default BootCarousel;