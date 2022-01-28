import React, { useState, useEffect } from "react";
import { useTheme, useThemeUpdate } from "../../../ThemeContext";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

const AboutMe = () => {
  const [value, setValue] = React.useState("1");
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }} style={themeStyles}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Hire Me Because…" value="1" />
            <Tab label="Passion For Programming" value="2" />
            <Tab
              label="Three Words About My Professional Qualities"
              value="3"
            />
            <Tab
              label="Three Words That Describe The Best Role For Me"
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          I have over 11 years of troubleshooting and problem-solving
          experience. I see myself as a partner rather than an employee.
          Meaning, I feel the success of the company I work with is directly
          tied to the product and accomplishments I provide to the company. I am
          a dedicated, focused, and punctual individual that will not accept
          failure on my behalf.
        </TabPanel>
        <TabPanel value="2">
          {" "}
          I am an addict of programming. Whether I’m looking at a website, a
          piece of electronic equipment, or a toy, all I can think about is what
          technologies, loops, arrays, or conditionals went into creating its
          behavior. I will frequently find myself programing my own projects for
          hours on end without realizing a moment has passed. Solving a problem
          that previously seemed impossible gives me an abundance of thrill,
          fulfillment, and motivation to continue.
        </TabPanel>
        <TabPanel value="3">
          {" "}
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
            {" "}
            Philomath: I have a passion for learning. I believe receiving
            mentorship is invaluable. I spend a minimum of three hours a day
            listening or watching educational content, from programming to
            astrophysics, to anthropology, and much more.
          </p>
        </TabPanel>
        <TabPanel value="4">
          <p>
            {" "}
            Challenging: I am a natural problem solver and I am ready and
            willing to take on the complex task my team assigns to me.{" "}
          </p>

          <p>
            {" "}
            Meaningful: I want my work to be fulfilling. I want to develop
            exceptional products that are easy to use, understand, and better
            the lives of consumers.{" "}
          </p>

          <p>
            {" "}
            Growth: I want to be in a position where I can absorb knowledge from
            my mentors and peers. I am eager to learn and grow as a developer to
            make the best products I am capable of creating.
          </p>
        </TabPanel>
      </TabContext>
    </Box>
    // <div style={themeStyles}

    //   </div>
    //   <h2></h2>
    //   <div>

    //   </div>
    // </div>
  );
};

export default AboutMe;
