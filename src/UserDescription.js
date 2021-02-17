import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./UserDescription.css";

const UserDescription = ({ user, handleBackClick }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition classNames="user-description" in={inProp} timeout={1000}>
      <div className="user-description-container">
        <div className="user-description-img">
          <img src={user.picture.large} />
        </div>
        <div className="user-description-data">
          <div className="user-description-data-description">Description</div>
          <div className="user-description-data-item">
            <label>Username: </label>
            {user.login.username}
          </div>
          <div className="user-description-data-item">
            <label>Name: </label>
            {user.name.first} {user.name.last}
          </div>
          <div className="user-description-data-item">
            <label>Age: </label>
            {user.dob.age}
          </div>
          <div className="user-description-data-item">
            <label>Email: </label>
            {user.email}
          </div>
          <div className="user-description-data-item">
            <label>Phone: </label>
            {user.phone} / {user.cell}
          </div>
          <div className="user-description-data-item">
            <label>Direction: </label>
            {user.location.street.name} {user.location.street.number}
          </div>
          <div className="user-description-data-item">
            <label>City: </label>
            {user.location.city}
          </div>
          <div className="user-description-data-item">
            <label>State: </label>
            {user.location.state}
          </div>
          <div className="user-description-data-item">
            <label>Country: </label>
            {user.location.country}
          </div>
        </div>
        <div className="user-description-navigation">
          <button onClick={handleBackClick}>Back</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default UserDescription;
