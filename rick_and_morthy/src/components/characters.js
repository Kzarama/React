import React from "react";
import "./styles/characters.css";

class Characters extends React.Component {
  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${this.props.character.id}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  methods = () => {
    console.log(this.props.character.name);
  };

  render() {
    return (
      <div
        className="character"
        style={{ backgroundImage: `url(${this.props.character.image})` }}
        onClick={this.methods()}
      >
        <div className="name_container">
          <h1>{this.props.character.name}</h1>
        </div>
      </div>
    );
  }
}

export default Characters;
