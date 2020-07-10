import React from "react";
import "./styles/characters.css";

class Characters extends React.Component {
  info = () => {
    console.log(this.props.character.name);
  };

  render() {
    return (
      <div
        className="character"
        style={{ backgroundImage: `url(${this.props.character.image})` }}
        onClick={() => this.info()}
      >
        <div className="name_container">
          <span>{this.props.character.name}</span>
        </div>
      </div>
    );
  }
}

export default Characters;
