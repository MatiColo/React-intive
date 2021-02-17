import { useState } from "react";
import "./UsersListItem.css";

const UsersListItem = ({ user, handleClick }) => {
  return (
    <div className="users-list-item">
      <div className="img-container">
        <img src={user.picture.large} onClick={handleClick} />
      </div>
      <div className="data-container">
        <div className="data-item">
          <label>Name</label>
          {user.name.title} {user.name.first} {user.name.last}
        </div>
        <div className="data-item">
          <label>City</label>
          {user.location.city}
        </div>
        <div className="data-item">
          <label>Country</label>
          {user.location.country}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
