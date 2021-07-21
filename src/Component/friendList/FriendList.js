/** @format */

import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";
import style from "./friendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendList.propType = {
  friends: PropTypes.array,
};

export default FriendList;
