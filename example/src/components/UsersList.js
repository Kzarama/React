import React from "react";
import User from "./User";

const users = [
  {
    id: 1,
    name: "Dog",
  },
  {
    id: 2,
    name: "Cat",
  },
  {
    id: 3,
    name: "Fish",
  },
];

function UsersList() {
  return (
    <div>
      <p>Lista de usuarios</p>
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
