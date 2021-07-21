/** @format */

import React from "react";
import ProfileItem from "./profileItem/ProfileItem";
import style from "./profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.tag}>{location}</p>
      </div>

      <ul className={style.stats}>
        {Object.entries(stats).map((item) => (
          <ProfileItem
            statsNameElement={item[0]}
            statsValueElement={item[1]}
            key={item[0]}
          />
        ))}
      </ul>
    </div>
  );
};

Profile.propType = {
  name: PropTypes.String,
  tag: PropTypes.String,
  location: PropTypes.String,
  avatar: PropTypes.String,
  stats: PropTypes.object,
};

export default Profile;
