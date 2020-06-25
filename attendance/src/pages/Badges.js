import React from "react";

import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/attendance.png";
import BadgesList from "../components/BadgesList";
import Loading from "../components/Loading";
import PageError from "../components/PageError";
import api from "../api";
import MiniLoading from "../components/MiniLoading";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <Loading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conference logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
          {this.state.loading && <MiniLoading />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
