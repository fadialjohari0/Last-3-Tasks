import React from "react";
import Calculator from "./calculator/Calculator";
import History from "./history/History";
import CalculatorContextProvider from "../context/CalculatorContext";
import styles from "./CalculatorView.module.css";

const CalculatorView = () => {
  return (
    <main className={styles.main}>
      <CalculatorContextProvider>
        <History />
        <Calculator />
      </CalculatorContextProvider>
    </main>
  );
};

export default CalculatorView;
