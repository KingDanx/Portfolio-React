import React, { useState, useEffect } from "react";
import resume from "../../../resume/Dan Prudhomme - dev Resume.docx";
import dan from "../../../images/Dan-Prudhomme.jpg";
import js from "../../../images/javascript.png";
import html from "../../../images/HTML.png";
import css from "../../../images/CSS.3.svg";
import react from "../../../images/react.png";
import node from "../../../images/node.png";
import Button from "@mui/material/Button";
import "./styles/Home.css";


const Home = () => {
  return (
    <div>
      Home
      <h1>Dan Prudhomme Jr</h1>
      <div>
        
        <div className="main">
        <img src={dan} alt="image of Dan Prudhomme Jr" className="me"/>
          <div className="item">
            <img
              src={js}
              height="50px"
              alt="image of JavaScript"
            />
          </div>
          <div className="item" style={{animationDelay: "-3s"}}>
            <img
              src={css}
              height="50px"
              alt="image of CSS icon"
              style={{animationDelay: "-3s"}}
            />
          </div>
          <div className="item" style={{animationDelay: "-6s"}}>
            <img
              src={html}
              height="50px"
              alt="image of HTML icon"
              style={{animationDelay: "-6s"}}
            />
          </div>
          <div className="item" style={{animationDelay: "-9s"}}>
            <img
              src={react}
              height="50px"
              alt="image of react icon"
              style={{animationDelay: "-9s"}}
            />
          </div>
          <div className="item" style={{animationDelay: "-12s"}}>
            <img
              src={node}
              height="50px"
              alt="image of node icon"
              style={{animationDelay: "-12s"}}
            />
          </div>
        </div>

        <a
          href={resume}
          style={{ textDecoration: "none" }}
          download="Dan Prudhomme - Resume"
        >
          {" "}
          <Button
            variant="contained"
            sx={{ borderRadius: "500px", textTransform: "none" }}
          >
            Lets Work Together
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
