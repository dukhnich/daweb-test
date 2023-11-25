import "./style.css";
import { useState } from "react";

const LightSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <button
      className={isOn ? "btn btn--on" : "btn"}
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? "Zhasnout" : "Rozsvítit"}
    </button>
  );
};

export default LightSwitch;
