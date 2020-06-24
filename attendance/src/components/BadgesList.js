import React from "react";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatar_url}
          alt={`${this.props.badge.first_name} ${this.props.badge.last_name}`}
        />

        <div>
          <strong>
            {this.props.badge.first_name} {this.props.badge.last_name}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.job_title}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
