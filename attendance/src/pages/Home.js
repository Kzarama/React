import React from "react";

import "./styles/Home.css";

import confLogo from "../images/attendance.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <img className="img-fluid mb-2" src={confLogo} alt="confLogo" />
          <h1>Badge Management System</h1>
          <Link className="btn btn-primary" to="/badges">
            Start
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
