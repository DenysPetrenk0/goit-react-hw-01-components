/** @format */

import React from "react";
import style from "../profile.module.css";

const ProfileItem = ({ statsNameElement, statsValueElement }) => {
  return (
    <li>
      <div>
        <span className={style.tag}>{statsNameElement}</span>
        <span className={style.quantity}>{statsValueElement}</span>
      </div>
    </li>
  );
};

export default ProfileItem;
