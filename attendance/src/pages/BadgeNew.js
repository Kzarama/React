import React from "react";

import "./styles/BadgeNew.css";
import confLogo from "../images/attendance.png";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../api";
import Loading from "../components/Loading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

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
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB TITLE"}
                email={this.state.form.email}
                avatarUrl={this.state.form.avatarUrl}
              />
            </div>

            <div className="col-6">
              <h1>New attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
