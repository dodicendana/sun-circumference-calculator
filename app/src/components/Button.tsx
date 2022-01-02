import React from "react";
import { PropsButton } from "../interfaces/PropsButton";

export const Button: React.FC<PropsButton> = ({ label, handleButtonClick }) => {
  return (
    <button className="button" onClick={handleButtonClick}>
      {label}
    </button>
  );
};
