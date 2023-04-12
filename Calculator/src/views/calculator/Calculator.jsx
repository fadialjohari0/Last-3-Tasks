import React, { useContext, useState } from "react";
import * as math from "mathjs";

import { CalculatorContext } from "../../context/CalculatorContext";
import CalculatorButtons from "./CalculatorButtons";

import styles from "./Calculator.module.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const [error, setError] = useState(false);

  const {
    handleCalculation,
    selectedHistory,
    setIsHistorySelected,
    isHistorySelected,
  } = useContext(CalculatorContext);

  const buttons = [
    { value: "C", className: styles.operator, onClick: () => handleClick("C") },
    {
      value: "+/-",
      className: styles.operator,
      onClick: () => handleClick("+/-"),
    },
    { value: "%", className: styles.operator, onClick: () => handleClick("%") },
    { value: "/", className: styles.operator, onClick: () => handleClick("/") },
    { value: "7", className: styles.number, onClick: () => handleClick("7") },
    { value: "8", className: styles.number, onClick: () => handleClick("8") },
    { value: "9", className: styles.number, onClick: () => handleClick("9") },
    { value: "x", className: styles.operator, onClick: () => handleClick("*") },
    { value: "4", className: styles.number, onClick: () => handleClick("4") },
    { value: "5", className: styles.number, onClick: () => handleClick("5") },
    { value: "6", className: styles.number, onClick: () => handleClick("6") },
    { value: "-", className: styles.operator, onClick: () => handleClick("-") },
    { value: "1", className: styles.number, onClick: () => handleClick("1") },
    { value: "2", className: styles.number, onClick: () => handleClick("2") },
    { value: "3", className: styles.number, onClick: () => handleClick("3") },
    { value: "+", className: styles.operator, onClick: () => handleClick("+") },
    {
      value: "0",
      className: `${styles.number} ${styles.zeroNumber}`,
      onClick: () => handleClick("0"),
    },
    { value: ".", className: styles.operator, onClick: () => handleClick(".") },
    { value: "=", className: styles.operator, onClick: () => handleClick("=") },
  ];

  const handleClick = (char) => {
    switch (char) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (displayValue === "0") {
          setDisplayValue(char);
        } else {
          setDisplayValue(displayValue + char);
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        setOperator(char);
        setStoredValue(displayValue);
        setDisplayValue("0");
        break;
      case "+/-":
        setDisplayValue((parseFloat(displayValue) * -1).toString());
        break;
      case ".":
        if (!displayValue.includes(".")) {
          setDisplayValue(displayValue + ".");
        }
        break;
      case "C":
        setDisplayValue("0");
        setOperator("");
        setStoredValue("");
        setError(false);
        break;
      case "=":
        let num1 = parseFloat(storedValue);
        try {
          let num2 = parseFloat(displayValue);
          let result = math.evaluate(`${num1} ${operator} ${num2}`);
          setDisplayValue(result.toFixed(1));
          setOperator("");
          setStoredValue("");
          if (isHistorySelected) {
            num1 = parseFloat(selectedHistory);
            result = math.evaluate(`${num1} ${operator} ${num2}`);
            handleCalculation(
              `${num1} ${operator} ${num2} = ${result.toFixed(1)}`
            );
            setIsHistorySelected(false);
            setDisplayValue(result.toFixed(1));
          } else {
            handleCalculation(
              `${num1} ${operator} ${num2} = ${result.toFixed(1)}`
            );
          }
          setError(false);
        } catch (err) {
          setError(true);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.result}>
        {error ? (
          <span className={styles.errorMessage}>Second value unavailable</span>
        ) : (
          ""
        )}
        <p className={styles.resultValue}>
          {isHistorySelected ? selectedHistory : displayValue}
        </p>
      </div>
      <div className={styles.calcButtons}>
        {buttons.map((button) => (
          <CalculatorButtons
            value={button.value}
            key={button.value}
            className={button.className}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
