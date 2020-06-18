import React from "react";
import User from "./User";
import { connect } from "react-redux";

// const users = [
//   {
//     id: 1,
//     name: "Dog",
//   },
//   {
//     id: 2,
//     name: "Cat",
//   },
//   {
//     id: 3,
//     name: "Fish",
//   },
// ];

class UsersList extends React.Component {
  render() {
    const { users } = this.props;
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
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const wrapper = connect(mapStateToProps);
const component = wrapper(UsersList);

export default component;
