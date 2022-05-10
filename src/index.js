import React from "react";
import ReactDOM from "react-dom";
import './styles/main.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { MainProvider } from "./contexts/MainProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainProvider>
        <App />
      </MainProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
