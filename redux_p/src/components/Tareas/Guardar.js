import React from "react";

class Guardar extends React.Component {
  render() {
    return (
      <div>
        <h1>Guardar tarea</h1>
        Usuario id:
        <input type="number" />
        <br />
        <br />
        Titulo:
        <input />
        <br />
        <br />
        <button>Guardar</button>
      </div>
    );
  }
}

export default Guardar;
