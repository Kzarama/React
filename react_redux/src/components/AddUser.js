import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions";

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addUser({ id: Math.random(), name: this.state.name });
    this.setState({ name: "" });
  }

  updateNameValue(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.updateNameValue.bind(this)}
        />
        <input type="submit" onClick={this.onSubmit.bind(this)} />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
