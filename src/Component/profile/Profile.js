/** @format */

import React from "react";
import ProfileList from "./profileList/ProfileList";
import style from "./profile.module.css";

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
          <ProfileList statsValue={item[0]} statsKey={item[1]} />
        ))}
      </ul>
    </div>
  );
};

export default Profile;
