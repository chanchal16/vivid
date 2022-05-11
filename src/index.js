import React from "react";
import ReactDOM from "react-dom";
import './styles/main.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { Provider } from 'react-redux';
import {store} from 'store/store'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
