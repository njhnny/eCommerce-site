import React from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js";
import "bootstrap";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

var element =<div>HelloWorld</div>;

ReactDOM.render(
  element,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
