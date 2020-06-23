import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/attendance.jpeg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?id=identicon"
            alt="Avatar"
          />
          <h1>
            Kevin
            <br />
            Zarama
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>System Engineer</h3>
          <p>kzarama</p>
        </div>

        <div className="Badge__footer">#attendance</div>
      </div>
    );
  }
}

export default Badge;
