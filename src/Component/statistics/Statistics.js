/** @format */

import React from "react";
import StatisticsList from "./statisticsList/StatisticsList";
import style from "./statistics.module.css";

const Statistics = ({ stats, title }) => {
  return (
    <div className={style.StatBox}>
      <h2 className={style.statTitle}>{title}</h2>
      <ul className={style.statList}>
        {stats.map((item) => (
          <StatisticsList item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
