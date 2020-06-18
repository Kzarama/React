import React from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <UsersList />
      <br />
      <br />
      <br />
      <br />
      <AddUser />
    </div>
  );
}

export default App;
