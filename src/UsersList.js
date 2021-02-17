import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { CSSTransition } from "react-transition-group";
import UsersListItem from "./UsersListItem.js";
import UserDescription from "./UserDescription.js";

import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    const url = "https://randomuser.me/api/?page=1&results=100&seed=mati";
    return fetch(url)
      .then((r) => r.json())
      .then((json) => {
        const newUsers = [...users, ...json.results];
        setUsers(newUsers);
      });
  }, []);

  const loadFunc = (page) => {
    if (page == 10) {
      setHasMore(false);
    }
    const url =
      "https://randomuser.me/api/?page=" + page + "&results=50&seed=mati";
    return fetch(url)
      .then((r) => r.json())
      .then((json) => {
        const newUsers = [...users, ...json.results];
        setUsers(newUsers);
      });
  };

  if (!selectedUser) {
    return (
      <CSSTransition classNames="users-list-item" in={inProp} timeout={1000}>
        <InfiniteScroll
          className="users-list"
          pageStart={2}
          initialLoad={false}
          loadMore={loadFunc}
          hasMore={hasMore}
          // React infinite scroller has a problem when you define a custom loader, it throws a warning, which is solved by adding a key to the element that is rendered in the custom loader
          loader={<span key={0} />}
        >
          {users.map((user) => (
            <UsersListItem
              key={user.login.uuid}
              user={user}
              handleClick={() => {
                setSelectedUser(user);
              }}
            />
          ))}
        </InfiniteScroll>
      </CSSTransition>
    );
  }

  return (
    <div className="user-description">
      <UserDescription
        user={selectedUser}
        handleBackClick={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default UsersList;
