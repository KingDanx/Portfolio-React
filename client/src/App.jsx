import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";
import { useTheme, useThemeUpdate } from "./ThemeContext";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
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

  const themeStyles = {
    backgroundColor: darkTheme ? "#000000e6" : "#fff",
    color: darkTheme ? "#CCC" : "#333",
    minHeight: "100%",
  };


  return (
      <div style={themeStyles}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="aboutme" element={<AboutMe />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </div>
  );
};

export default App;
