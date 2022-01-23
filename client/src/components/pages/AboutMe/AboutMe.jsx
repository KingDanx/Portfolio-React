import React, { useState, useEffect } from 'react';
import {useTheme, useThemeUpdate} from "../../../ThemeContext";

const AboutMe = () => {
    const darkTheme = useTheme();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
    }
    
    return ( 
        <div style={themeStyles}>About Me</div>
     );
}
 
export default AboutMe;