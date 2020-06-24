import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/attendance.png";

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
            src={this.props.avatar_url}
            alt="Avatar"
          />
          <h1>
            {this.props.first_name}
            <br />
            {this.props.last_name}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.job_title}</h3>
          <p>{this.props.twitter}</p>
        </div>

        <div className="Badge__footer">#attendance</div>
      </div>
    );
  }
}

export default Badge;
