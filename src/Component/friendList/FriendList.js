/** @format */

import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";
import style from "./friendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
