import React from "react";

import "./styles/BadgeDetail.css";
import confLogo from "../images/attendance.png";
import Loading from "../components/Loading";
import PageError from "../components/PageError";
import api from "../api";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <PageError />;
    }

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo conf" />
              </div>

              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {this.state.data.firstName} {this.state.data.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.data.firstName}
                lastName={this.state.data.lastName}
                email={this.state.data.email}
                twitter={this.state.data.twitter}
                jobTitle={this.state.data.jobTitle}
              />
            </div>

            <div className="col-6">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${this.state.data.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
