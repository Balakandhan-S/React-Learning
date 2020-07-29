import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

function MainComponent() {
  return (
    <div>
      <AppHeader />
      <p>Am learning React</p>
      <ol>
        <li>Bali</li>
        <li>Andaman</li>
        <li>Kerala</li>
      </ol>
      <AppFooter />
    </div>
  );
}

export default MainComponent;
