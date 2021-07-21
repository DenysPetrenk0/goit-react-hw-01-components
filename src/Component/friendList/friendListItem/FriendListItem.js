/** @format */

import React from "react";
import style from "../friendList.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={style.item}>
      <span className={friend.isOnline ? style.activ : style.disabled}></span>
      <img className={style.avatar} src={friend.avatar} alt="" width="48" />
      <p className={style.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
