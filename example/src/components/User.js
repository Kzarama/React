import React from "react";

// Class component
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "#cccccc",
    };
  }

  onPressButton() {
    this.setState({
      color: "#abcdef",
    });
  }

  render() {
    const name = this.props.name;
    return (
      <li style={{ backgroundColor: this.state.color }}>
        {name}
        <button onClick={this.onPressButton.bind(this)}>Change color</button>
      </li>
    );
  }
}

// // Function component
// function User(props) {
//   return <li>{props.name}</li>;
// }

// // Arrow function component
// const User = (props) => (
//   <div>
//     <li>{props.name}</li>
//   </div>
// );

export default User;
