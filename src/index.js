import React from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";
import './index.css';
//import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <NavBar />,
  //element,
  // <React.StrictMode>
//<App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

