/** @format */

import React from "react";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";
import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
