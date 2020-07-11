import React from "react";
import ReactDOM from "react-dom";

import "./styles/characterDetails.css";

function CharacterDetails(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Detail">
      <div className="Detail_container">
        <h1>{props.character.name}</h1>
        <img src={props.character.image} alt={props.character.name} />
        {props.character.status === "Alive" ? (
          <h2>
            Status = <span class="dot-alive"></span>
          </h2>
        ) : props.character.status === "Dead" ? (
          <h2>
            Status = <span class="dot-dead"></span>
          </h2>
        ) : (
          <h2>
            Status = <span class="dot-unknown"></span>
          </h2>
        )}
        <button onClick={props.onClose} className="Detail_close-button">
          Close
        </button>
      </div>
    </div>,
    document.getElementById("details")
  );
}

export default CharacterDetails;
