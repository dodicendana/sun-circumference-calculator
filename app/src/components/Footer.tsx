import React from "react";

export const Footer: React.FC<{ labelFooter: string }> = ({ labelFooter }) => {
  return <div className="footer">{labelFooter}</div>;
};
