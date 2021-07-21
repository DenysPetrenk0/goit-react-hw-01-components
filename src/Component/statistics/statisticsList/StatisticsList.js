/** @format */

import React from "react";
import style from "../statistics.module.css";

const StatisticsList = ({ item }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{item.label}</span>
      <span className={style.percentage}>{item.percentage}%</span>
    </li>
  );
};

export default StatisticsList;
