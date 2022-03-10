import * as React from "react";
import { useTheme, useThemeUpdate } from "../../../../ThemeContext";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/Accordion.css";

const ProjectAccordion = ({ expanded, setExpanded }) => {
  const darkTheme = useTheme();
  const divStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    borderRadius: "20px",
    padding: "20px",
  };

  const titleTheme = {
    backgroundColor: darkTheme ? "#b0b0b0" : "#333",
    color: darkTheme ? "#5d5d5d" : "#CCC",
  };

  const arrowTheme = {
    color: darkTheme ? "#5d5d5d" : "#CCC",
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="accordion" style={divStyle}>
      <Accordion
        expanded={expanded === "capstone"}
        onChange={handleChange("capstone")}
      >
        <AccordionSummary
          style={titleTheme}
          expandIcon={<ExpandMoreIcon style={arrowTheme}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Capstone Project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        default
        expanded={expanded === "javascript"}
        onChange={handleChange("javascript")}
      >
        <AccordionSummary
          style={titleTheme}
          expandIcon={<ExpandMoreIcon style={arrowTheme}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            JavaScript Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "arduino"}
        onChange={handleChange("arduino")}
      >
        <AccordionSummary
          style={titleTheme}
          expandIcon={<ExpandMoreIcon style={arrowTheme}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Arduino Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "other"}
        onChange={handleChange("other")}
      >
        <AccordionSummary
          style={titleTheme}
          expandIcon={<ExpandMoreIcon style={arrowTheme}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Other Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProjectAccordion;
