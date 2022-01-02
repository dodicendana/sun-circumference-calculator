import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactComponent as LoadingImage } from "../assets/Pulse-1s-200px.svg";

export const Loading: React.FC<{
  isLoading: boolean;
}> = ({ isLoading }) => {
  const [isDisplayNone, setIsDisplayNone] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setIsDisplayNone(false);
    } else {
      setTimeout(() => {
        setIsDisplayNone(true);
      }, 250);
    }
  }, [isLoading]);

  return (
    <div
      className={
        "loading-wrapper " +
        (isLoading ? "show" : "hide ") +
        (isDisplayNone ? "display-none " : "")
      }
    >
      <div className="modal">
        <div className="loading-inner-wrapper">
          <LoadingImage className="loading-image" />
          <div className="loading-text">Now Loading...</div>
        </div>
      </div>
    </div>
  );
};
