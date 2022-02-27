import React, { useState, useEffect } from 'react';
import ProjectAccordion from './components/Accordion.jsx';
import './styles/Projects.css';

const Projects = () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <div className='project-split'>
            <div>
                <ProjectAccordion expanded={expanded} setExpanded={setExpanded} />
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uBk-Wst_7aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Projects;