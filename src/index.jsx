import React from "react";
import ReactDOM from "react-dom"; //since we are relying on npm to import React libraries, we must import these libraries into this file.
import App from "./components/App"; //Because our content is now in App.jsx, we only need to render this parent component in index.jsx.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <App/>,
  document.getElementById('react-app-root')
);

//after needing to only render the parent component by indicating that index.sx is our entry point in comfig file.

JSX version/ Changed file type to ".jsx" and linked it into our index.html:
ReactDOM.render(
  <div>
    <h1>Help Queue</h1>
    <h3>3a</h3>
    <h3>Thato and Haley</h3>
    <p><em>Firebase will not save record!</em></p>
  </div>,
  document.getElementById('react-app-root')
);

//regular JS version:
// var heading = React.createElement('h1', {}, 'Help Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
// var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);
//
// ReactDOM.render(
  //   app,
  //   document.getElementById('react-app-root')
  // );
