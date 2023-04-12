import React, { useContext } from "react";
import styles from "./History.module.css";
import { CalculatorContext } from "../../context/CalculatorContext";

const History = () => {
  const {
    calculationHistory,
    handleCalculationSelect,
    setSelectedHistory,
    setIsHistorySelected,
    setIsClear,
  } = useContext(CalculatorContext);

  const handleHistoryClick = (result, index) => {
    handleCalculationSelect(index);
    setSelectedHistory(result.substring(result.indexOf("=") + 1));
    setIsHistorySelected(true);
  };
  const teste = () => {
    setIsClear(true);
  };
  return (
    <div className={styles.historyContainer}>
      <div>
        {calculationHistory.map((result, index) => (
          <p
            key={index}
            className={styles.historyResult}
            onClick={() => {
              handleHistoryClick(result, index);
            }}
          >
            {result}
          </p>
        ))}
      </div>
      <div>
        <button className={styles.clearHistoryBtn} onClick={teste}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default History;
