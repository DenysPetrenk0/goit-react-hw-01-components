/** @format */

import React from "react";
import StatisticsItem from "./statisticsItem/StatisticsItem";
import style from "./statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {
  return (
    <div className={style.StatBox}>
      {!title ? null : <h2 className={style.statTitle}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map((item) => (
          <StatisticsItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

Statistics.propType = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
