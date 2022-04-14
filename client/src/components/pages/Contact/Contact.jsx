import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Contact = () => {
  
const instagram = {
    borderRadius: "500px",
    backgroundImage: "linear-gradient(to right, #f5cb00, #fb0b01 50%, #f100d2 75%)",
    minWidth: "118px",
} 

const facebook = {
    borderRadius: "500px",
    minWidth: "118px",
}

const email = {
    borderRadius: "500px",
    minWidth: "118px",
    backgroundColor: "#07af07"
}

  return (
    <div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dannyprud@gmail.com&subject=hi&su=I'd LOVE to hire you!"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button sx={email} variant="contained">E-mail</Button>
      </a>
      <a
        href="https://www.facebook.com/dannyprud"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button sx={facebook} variant="contained">Facebook</Button>
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
