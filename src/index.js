import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);
