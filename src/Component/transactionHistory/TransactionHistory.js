/** @format */

import React from "react";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";
import style from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

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

TransactionHistory.propType = {
  items: PropTypes.array,
};

export default TransactionHistory;
