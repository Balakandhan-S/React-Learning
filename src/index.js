import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <g>
      <h4>Hi am Bala!</h4>
      <p>Am learning React</p>
      <ol>
        <li>Bali</li>
        <li>Andaman</li>
        <li>Kerala</li>
      </ol>
    </g>
  );
}

let rootElement = document.getElementById("root");
ReactDOM.render(<MyInfo />, rootElement);
