import React, { useState, useEffect } from "react";
import ProjectAccordion from "./components/Accordion.jsx";
import "./styles/Projects.css";

const Projects = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="project-split">
      <div>
        <ProjectAccordion expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src={
            expanded === `panel1`
              ? "https://www.youtube.com/embed/nbhxBLQ54oE"
              : expanded === `panel2`
              ? "https://www.youtube.com/embed/AfFFAE40cb0"
              : expanded === `panel3`
              ? "https://www.youtube.com/embed/FD27fJ21Gp8"
              : expanded === `panel4`
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
