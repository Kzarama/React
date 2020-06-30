import React from "react";

class Characters extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.character.image} alt="" />
        <h1>{this.props.character.name}</h1>
      </div>
    );
  }
}

export default Characters;
