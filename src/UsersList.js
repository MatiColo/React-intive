import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem.js";
import UserDescription from "./UserDescription.js";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((r) => r.json())
      .then((json) => setUsers(json.results));
  }, []);

  const userComponents = users.map((user) => {
    return (
      <UsersListItem
        user={user}
        handleClick={() => {
          setSelectedUser(user);
        }}
      ></UsersListItem>
    );
  });
  if (selectedUser == null) {
    return <div className="users-list">{userComponents}</div>;
  } else {
    return (
      <div className="user-description">
        <UserDescription
          user={selectedUser}
          handleBackClick={() => setSelectedUser(null)}
        ></UserDescription>{" "}
      </div>
    );
  }
};

export default UsersList;
