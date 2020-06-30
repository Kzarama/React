import React from "react";
import "./styles/characters.css";

class Characters extends React.Component {
  render() {
    return (
      <div
        className="character"
        style={{ backgroundImage: `url(${this.props.character.image})` }}
      >
        <div className="name_container">
          <h1>{this.props.character.name}</h1>
        </div>
      </div>
    );
  }
}

export default Characters;
