import React, { useState, useEffect } from 'react';
import resume from "../../../resume/Dan Prudhomme - dev Resume.docx";
import Button from '@mui/material/Button';
import "./styles/Home.css";
import { bgcolor } from '@mui/system';

const Home = () => {

    return ( 
        <div>Home

            <div>
            <a href={resume} style={{textDecoration: 'none'}} download="Dan Prudhomme - Resume"> <Button variant="contained" sx={{borderRadius: "500px"}}>Lets Work Together</Button></a>
            </div>
        </div>
     );
}
 
export default Home;