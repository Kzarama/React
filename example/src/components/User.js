import React from "react";

// class User extends React.Component {
//   render() {
//     const name = this.props.name;
//     return <li>{name}</li>;
//   }
// }

// function User(props) {
//   return <li>{props.name}</li>;
// }

const User = (props) => (
  <div>
    <li>{props.name}</li>
  </div>
);

export default User;
