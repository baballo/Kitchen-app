import React, { useState } from "react";
import Toaster from "../modules/Toaster";

const MainSwitchComponent = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);


  const handleButtonClick = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div>
      <button className="mainSwitchButton" onClick={handleButtonClick}>
        Switch {!isSwitchOn ? "On" : "Off"}
      </button>
    </div>
  );
};

export default MainSwitchComponent;
