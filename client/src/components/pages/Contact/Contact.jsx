import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Contact = () => {
  
const instagram = {
    borderRadius: "500px",
    backgroundImage: "linear-gradient(to right, #f5cb00, #fb0b01 50%, #aa3a9c 75%)",
} 

  return (
    <div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dannyprud@gmail.com&subject=hi&su=I'd LOVE to hire you!"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button sx={{borderRadius: "500px"}} variant="contained">E-mail</Button>
      </a>
      <a
        href="https://www.facebook.com/dannyprud"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button sx={{borderRadius: "500px"}} variant="contained">Facebook</Button>
      </a>
      
      <a
        href="https://www.instagram.com/kingdanx"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button sx={instagram} variant="contained">Instagram</Button>
      </a>
    </div>
  );
};

export default Contact;
