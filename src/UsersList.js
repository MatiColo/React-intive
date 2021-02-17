import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import UsersListItem from "./UsersListItem.js";
import UserDescription from "./UserDescription.js";

import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadFunc = (page) => {
    if (page == 5) {
      setHasMore(false);
    }
    const url =
      "https://randomuser.me/api/?page=" + page + "&results=40&seed=mati";
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        const newUsers = [...users, ...json.results];
        setUsers(newUsers);
      });
  };
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
    return (
      <InfiniteScroll
        className="users-list"
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {userComponents}
      </InfiniteScroll>
    );
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
