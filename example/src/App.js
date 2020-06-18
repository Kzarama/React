import React from "react";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
