import React from "react";
import ReactDom from "react-dom";
import App from "./App";

function Index() {
  <div>Hello React</div>;
}

const reactTarget = document.getElementById("react-target");

ReactDom.render(<App />, reactTarget);
