import React, { useState } from "react";
import "@/css/togglebut.module.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`toggle-switch ${isOn ? "on" : "off"}`} onClick={toggleSwitch}>
      <div className="switch-handle"></div>
    </div>
  );
};

export default ToggleButton;
