import React from "react";

const CalculatorButtons = ({ value, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default CalculatorButtons;
