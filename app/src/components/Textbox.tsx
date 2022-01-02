import React from "react";
import { PropsTextbox } from "../interfaces/PropsTextbox";

export const Textbox: React.FC<PropsTextbox> = ({ label, value }) => {
  return (
    <div className="textbox-wrapper">
      <div className="textbox-label">{label}</div>
      <input className="textbox-value" value={value} />
    </div>
  );
};
