import React, { useState, useEffect } from 'react';
import ProjectAccordion from './components/Accordion.jsx';
import './styles/Projects.css';

const Projects = () => {
    return ( 
        <div className='project-split'>
            <div>
                <ProjectAccordion/>
            </div>
            <div>
                <iframe></iframe>
            </div>
        </div>
     );
}
 
export default Projects;