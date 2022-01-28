import React, { useState, useEffect } from "react";
import { useTheme, useThemeUpdate } from "../../../ThemeContext";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const AboutMe = (props) => {
  const [value, setValue] = React.useState("1");
  const [autoPlay, setAutoPlay] = useState(false);
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
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
    <div style={{ width: "50%"}}>
      <Carousel interval={10000} fullHeightHover={false} autoPlay={false}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default AboutMe;
