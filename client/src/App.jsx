import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";

const App = () => {

    const navigate = useNavigate();

    return ( 
        <div>Dan Prudhomme Jr
<div>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Home</Button>
        <Button>About Me</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
    </ButtonGroup>
</div>


<Routes>
          <Route
            path="/"
            element={<Home/>}
          ></Route>
          <Route
            path="projects"
            element={<Projects/>}
          ></Route>
          <Route
            path="aboutme"
            element={<AboutMe/>}
          ></Route>
          <Route
            path="contact"
            element={<Contact/>} 
          ></Route>
        </Routes> 
        </div>
     );
}
 
export default App;
