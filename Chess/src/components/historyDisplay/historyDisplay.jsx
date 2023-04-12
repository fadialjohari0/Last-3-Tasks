import React from "react";

import styles from "./history.module.css";

const HistoryDisplay = ({ historyFrom, historyTo }) => {
  return (
    <main className={styles.historyMain}>
      <h1 className={styles.title}>History</h1>
      <div className={styles.historyContainer}>
        <div className={styles.historyFrom}>
          FROM
          {historyFrom.map((historyFromCoordinate) => {
            return <div>{`[${historyFromCoordinate.join(", ")}]`}</div>;
          })}
        </div>
        <div className={styles.historyTo}>
          TO
          {historyTo.map((historyToCoordinate) => {
            return <div>{`[${historyToCoordinate.join(", ")}]`}</div>;
          })}
        </div>
      </div>
    </main>
  );
};

export default HistoryDisplay;
