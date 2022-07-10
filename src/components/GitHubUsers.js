import React, { useEffect, useState } from "react";

export const GitHubUsers = () => {
  let [users, setUsers] = useState([]);

  let url = `https://api.github.com/users`;

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setUsers(data);
  };

  let user = users.map((user) => {
    let { login, id, avatar_url, html_url } = user;
    return (
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url} target="_blank" rel="noreferrer">
            profile
          </a>
        </div>
      </li>
    );
  });

  return (
    <>
      <h3>github users</h3>
      <ul className="users">{user}</ul>
    </>
  );
};
