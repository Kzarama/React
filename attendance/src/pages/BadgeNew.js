import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/attendance.png";
import Navbar from "../components/Navbar";
import BadgeFrom from "../components/BadgeFrom";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  state = {
    form: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                first_name={this.state.form.first_name}
                last_name={this.state.form.last_name}
                twitter={this.state.form.twitter}
                job_title={this.state.form.job_title}
                email={this.state.form.email}
                avatar_url="https://picsum.photos/200/200/"
              />
            </div>
            <div className="col-6">
              <BadgeFrom
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
