import React, { useState, useEffect } from "react";
import { useTheme, useThemeUpdate } from "../../../ThemeContext";
import BootCarousel from "./components/BootCarousel";
// import Carousel from "react-material-ui-carousel";
import Carousel from 'react-bootstrap/Carousel';
import { Paper, Button } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = (props) => {
    const [value, setValue] = React.useState("1");
    const [autoPlay, setAutoPlay] = useState(false);
    const darkTheme = useTheme();
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        borderRadius: "20px",
        padding: "20px",
    };

    const Item = (props) => {
        return (
            <div style={themeStyles}>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>
        );
    };

    const items = [
        {
            name: "Hire Me Because…",
            description: (
                <p>
                    I have over 11 years of troubleshooting and problem-solving
                    experience. I see myself as a partner rather than an employee.
                    Meaning, I feel the success of the company I work with is directly
                    tied to the product and accomplishments I provide to the company. I am
                    a dedicated, focused, and punctual individual that will not accept
                    failure on my behalf.
                </p>
            ),
        },
        {
            name: "Passion For Programming",
            description: (
                <p>
                    I am an addict of programming. Whether I’m looking at a website, a
                    piece of electronic equipment, or a toy, all I can think about is what
                    technologies, loops, arrays, or conditionals went into creating its
                    behavior. I will frequently find myself programing my own projects for
                    hours on end without realizing a moment has passed. Solving a problem
                    that previously seemed impossible gives me an abundance of thrill,
                    fulfillment, and motivation to continue!
                </p>
            ),
        },
        {
            name: "Three Words About My Professional Qualities",
            description: (
                <div>
                    <p>
                        Persistent: When presented with a problem I do not give up until I
                        find some kind of solution. There are so many ways to solve problems
                        and I will break down my issue and attack from every angle until I
                        have a viable solution to my problem or until I make it a
                        non-problem.
                    </p>
                    <p>
                        Humble: I am not afraid of humility or being wrong. I enjoy
                        constructive criticism and consider the advice given to me. I
                        believe the moment we are right about everything we will no longer
                        be on the frontier of innovation.
                    </p>
                    <p>
                        Philomath: I have a passion for learning. I believe receiving
                        mentorship is invaluable. I spend a minimum of three hours a day
                        listening or watching educational content, from programming to
                        astrophysics, to anthropology, and much more.
                    </p>
                </div>
            ),
        },
        {
            name: "Passion For Programming",
            description:
                "I am an addict of programming. Whether I’m looking at a website, a piece of electronic equipment, or a toy, all I can think about is what technologies, loops, arrays, or conditionals went into creating its behavior. I will frequently find myself programing my own projects for hours on end without realizing a moment has passed. Solving a problem that previously seemed impossible gives me an abundance of thrill, fulfillment, and motivation to continue.!",
        },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: "50%" }}>
            {/* <Carousel interval={10000} fullHeightHover={false} autoPlay={false}>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel> */}

            <div>
                <BootCarousel />
            </div>
            <div><Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel></div>
        </div>
    );
};

export default AboutMe;
