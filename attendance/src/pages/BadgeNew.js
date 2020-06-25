import React from "react";

import "./styles/BadgeNew.css";
import confLogo from "../images/attendance.png";
import BadgeFrom from "../components/BadgeFrom";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
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
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={confLogo} alt="Conference logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST NAME"}
                lastName={this.state.form.lastName || "LAST NAME"}
                twitter={this.state.form.twitter || "@twitter"}
                jobTitle={this.state.form.jobTitle || "JOB TITLE"}
                email={this.state.form.email}
                avatarUrl="https://picsum.photos/200/200/"
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
      </React.Fragment>
    );
  }
}

export default BadgeNew;
