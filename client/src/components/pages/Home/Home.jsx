import React, { useState, useEffect } from "react";
import resume from "../../../resume/Dan Prudhomme - dev Resume.docx";
import dan from "../../../images/Dan-Prudhomme.jpg";
import Button from "@mui/material/Button";
import "./styles/Home.css";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const Home = () => {
  return (
    <div>
      Home
      <h1>Dan Prudhomme Jr</h1>
      <div>
        <img src={dan} alt="image of Dan Prudhomme Jr" />
        <div className="main">
          <div className="item">
            <img
              src={dan}
              height="50px"
              style={{ borderRadius: "50%" }}
              alt="image of Dan Prudhomme Jr"
            />
          </div>
          <div className="item"><AirplanemodeActiveIcon/></div>
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
