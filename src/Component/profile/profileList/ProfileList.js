/** @format */

import React from "react";
import style from "../profile.module.css";

const ProfileList = ({ statsValue, statsKey }) => {
  return (
    <li>
      <div>
        <span className={style.tag}>{statsValue}</span>
        <span className={style.quantity}>{statsKey}</span>
      </div>
    </li>
  );
};

export default ProfileList;
