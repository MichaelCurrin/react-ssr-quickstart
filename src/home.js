import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.hydrate(
  <App name={window.__INITIAL__DATA__.name} />,
  document.getElementById("root")
);
