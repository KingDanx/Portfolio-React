import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import {ThemeProvider} from "./ThemeContext.jsx";
import {useTheme, useThemeUpdate} from "./ThemeContext";
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';
import ButtonGroup from "@mui/material/ButtonGroup";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import ResponsiveAppBar from "./components/AppBar.jsx";

const App = () => {
  const navigate = useNavigate();
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <ThemeProvider>
      
      <div>
      
      <ResponsiveAppBar/>
      
      
        <div>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>Home</Button>
            </Link>
            <Link to="aboutme" style={{ textDecoration: "none" }}>
              <Button>About Me</Button>
            </Link>
            <Link to="projects" style={{ textDecoration: "none" }}>
              <Button>Projects</Button>
            </Link>
            <Link to="contact" style={{ textDecoration: "none" }}>
              <Button>Contact</Button>
            </Link>
          </ButtonGroup>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="aboutme" element={<AboutMe />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
