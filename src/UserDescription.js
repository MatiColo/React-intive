import "./UserDescription.css";

const UserDescription = ({ user, handleBackClick }) => {
  return (
    <div className="user-description-container">
      <div className="user-description-img">
        <img src={user.picture.large} />
      </div>
      <div className="user-description-data">
        <div className="user-description-data-item">
          <label>Username: </label>
          {user.login.username}
        </div>
        <div className="user-description-data-item">
          <label>Name: </label>
          {user.name.first} {user.name.last}
        </div>
        <div className="user-description-data-item">
          <label>Email: </label>
          {user.email}
        </div>
        <div className="user-description-data-item">
          <label>City: </label>
          {user.location.city}
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
  );
};

export default UserDescription;
