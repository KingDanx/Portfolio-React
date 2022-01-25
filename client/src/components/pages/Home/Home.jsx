import React, { useState, useEffect, useContext } from "react";
import { useTheme, useThemeUpdate } from "../../../ThemeContext";
import resume from "../../../resume/Dan Prudhomme - dev Resume.docx";
import dan from "../../../images/Dan-Prudhomme.jpg";
import js from "../../../images/javascript.png";
import html from "../../../images/HTML.png";
import css from "../../../images/CSS.3.svg";
import react from "../../../images/react.png";
import node from "../../../images/node.png";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import "./styles/Home.css";

const Home = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };

  return (
    <div>
      <h1>Dan Prudhomme Jr</h1>
      <div>
        <div className="main" style={themeStyles}>
          <img src={dan} alt="image of Dan Prudhomme Jr" className="me" />
          <div className="item">
            <img src={js} height="50px" alt="image of JavaScript" />
          </div>
          <div className="item" style={{ animationDelay: "-3s" }}>
            <img
              src={css}
              height="50px"
              alt="image of CSS icon"
              style={{ animationDelay: "-3s" }}
            />
          </div>
          <div className="item" style={{ animationDelay: "-6s" }}>
            <img
              src={html}
              height="50px"
              alt="image of HTML icon"
              style={{ animationDelay: "-6s" }}
            />
          </div>
          <div className="item" style={{ animationDelay: "-9s" }}>
            <img
              src={react}
              height="50px"
              alt="image of react icon"
              style={{ animationDelay: "-9s" }}
            />
          </div>
          <div className="item" style={{ animationDelay: "-12s" }}>
            <img
              src={node}
              height="50px"
              alt="image of node icon"
              style={{ animationDelay: "-12s" }}
            />
          </div>
        </div>
        <div>Open to Work:</div>
        <a
          href={resume}
          style={{ textDecoration: "none" }}
          download="Dan Prudhomme - Resume"
        >
          {" "}
          <div>
            <Button
              variant="contained"
              sx={{ borderRadius: "500px", textTransform: "none" }}
            >
              Download Resume
            </Button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
