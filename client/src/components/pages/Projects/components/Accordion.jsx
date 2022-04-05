import * as React from "react";
import { useTheme, useThemeUpdate } from "../../../../ThemeContext";
import Accordion from "@mui/material/Accordion";
import Button from "@mui/material/Button";
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
  };

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
          expandIcon={<ExpandMoreIcon style={arrowTheme} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Capstone Project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              href="https://ambitious-forgetfuls.com"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "500px", textTransform: "none" }}
              >
                Ambitious Forgetfuls - Live
              </Button>
            </a>
            <br />
            <br />
            <a
              href="https://github.com/KingDanx/Ambitious-Forgetfuls-Public"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "500px", textTransform: "none" }}
              >
                Ambitious Forgetfuls - Source
              </Button>
            </a>
            <br />
            <br />
            This is full stack task completion social network created using the
            MERN stack. With 25 current users, 30 created tasks, and over 600
            days of daily logs stored in a MongoDB database. Ambitious
            Forgetfuls App In today’s whirlwind of chores, orders, and to-do
            lists, it can be difficult to keep track of all your tasks as well
            as your progress in each task! Ambitious Forgetful can be used as a
            tracker for employee contributions in the workplace, a reminder tool
            for commonly forgotten tasks in our adult lives, and as an incentive
            to reward children for completing daily chores. It is a daily task
            tracker that will reward points for completed tasks. Users can have
            multiple task tracker panels, consisting of private personal tasks
            and shared team tasks to be completed with others by invitation.
            <br />
            <br />
            Technologies: MongoDB, Express.js, React.js, Node.js, Chart.js.
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
          expandIcon={<ExpandMoreIcon style={arrowTheme} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            JavaScript Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              href="https://github.com/KingDanx/React-Grader"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "500px", textTransform: "none" }}
              >
                React Grader
              </Button>{" "}
            </a>{" "}
            - a responsive full stack unit conversion test grading application.
            This can be used to create a templet of a test then quickly grade
            each test by inputing students answers from their paper worksheet.
            <br />
            <br />
            <a
              href="https://github.com/KingDanx/RPSLS2.0"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "500px", textTransform: "none" }}
              >
                RSPLS
              </Button>{" "}
            </a>{" "}
            - Node.js/OOP - Rock crushes Scissors Scissors cuts Paper Paper
            covers Rock Rock crushes Lizard Lizard poisons Spock Spock smashes
            Scissors Scissors decapitates Lizard Lizard eats Paper Paper
            disproves Spock Spock vaporizes Rock
            <br />
            <br />
            <a
              href="https://github.com/pedrobando/most-wanted-user-stories"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "500px", textTransform: "none" }}
              >
                Most Wanted
              </Button>{" "}
            </a>{" "}
            - this is a ancestry style application utilizing recursion and
            functional programing. Navigate through alerts to find the person
            you're looking for in the data base!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "arduino"}
        onChange={handleChange("arduino")}
      >
        <AccordionSummary
          style={titleTheme}
          expandIcon={<ExpandMoreIcon style={arrowTheme} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Arduino Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              href="https://github.com/KingDanx/Bathroom-Switcher"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "500px", textTransform: "none" }}
              >
                Bathroom Switcher
              </Button>{" "}
            </a>{" "}
            - have you ever wondered how long it has been since a stall was
            available to use? This program will connect an arduino
            microcontroller to an eight segment display and to two magnetic
            switches. If both switches are closed, then the timer will count up.
            Once one of the switches open the timer is reset.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "other"}
        onChange={handleChange("other")}
      >
        <AccordionSummary
          style={titleTheme}
          expandIcon={<ExpandMoreIcon style={arrowTheme} />}
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
