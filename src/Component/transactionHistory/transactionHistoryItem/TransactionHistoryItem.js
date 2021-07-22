/** @format */

import React from "react";
import PropTypes from "prop-types";

const TransactionHistoryItem = ({ item }) => {
  return (
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propType = {
  items: PropTypes.array,
};

export default TransactionHistoryItem;
