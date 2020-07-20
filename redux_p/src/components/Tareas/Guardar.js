import React from "react";
import { connect } from "react-redux";
import * as tareasActions from "../../actions/tareasActions";

class Guardar extends React.Component {
  cambioUsuarioId = (event) => {
    this.props.cambioUsuarioId(event.target.value);
  };

  cambioTitulo = (event) => {
    this.props.cambioTitulo(event.target.value);
  };

  guardar = () => {
    const { usuario_id, titulo, agregar } = this.props;
    const nueva_tarea = {
      userId: usuario_id,
      title: titulo,
      completed: false,
    };
    agregar(nueva_tarea);
  };

  render() {
    return (
      <div>
        <h1>Guardar tarea</h1>
        Usuario id:
        <input
          type="number"
          value={this.props.usuario_id}
          onChange={this.cambioUsuarioId}
        />
        <br />
        <br />
        Titulo:
        <input value={this.props.titulo} onChange={this.cambioTitulo} />
        <br />
        <br />
        <button onClick={this.guardar}>Guardar</button>
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);