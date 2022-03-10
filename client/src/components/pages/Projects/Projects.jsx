import React, { useState, useEffect } from "react";
import ProjectAccordion from "./components/Accordion.jsx";
import "./styles/Projects.css";

const Projects = () => {
  const [expanded, setExpanded] = React.useState(`capstone`);
  return (
    <div className="project-split">
      <div>
        <ProjectAccordion expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div>
        <iframe
          width="711"
          height="400"
          src={
            expanded === `capstone`
              ? "https://www.youtube.com/embed/nbhxBLQ54oE"
              : expanded === `javascript`
              ? "https://www.youtube.com/embed/AfFFAE40cb0"
              : expanded === `arduino`
              ? "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6907492577902530560?compact=1"
              : expanded === `other`
              ? "https://www.youtube.com/embed/FA27fJ22Gp8"
              : null
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
