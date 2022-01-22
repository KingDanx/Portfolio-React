import React, { useState, useEffect } from 'react';
import resume from "../../../resume/Dan Prudhomme - dev Resume.docx";

const Home = () => {

    return ( 
        <div>Home

            <div>
                <a href={resume} download="Dan Prudhomme - Resume">Download</a>
            </div>
        </div>
     );
}
 
export default Home;