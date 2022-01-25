import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";
import "./App.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </React.StrictMode>
  </Router>,

  document.getElementById("root")
);