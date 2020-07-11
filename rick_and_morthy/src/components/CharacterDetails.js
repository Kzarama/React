import React from "react";
import ReactDOM from "react-dom";

import "./styles/characterDetails.css";

function CharacterDetails(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <h1>{props.character.name}</h1>
        <button onClick={props.onClose} className="Modal__close-button">
          Close
        </button>
      </div>
    </div>,
    document.getElementById("details")
  );
}

export default CharacterDetails;
