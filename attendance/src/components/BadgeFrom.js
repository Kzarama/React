import React from "react";

class BadgeForm extends React.Component {
  render() {
    return (
      <div>
        <h1>New attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
              onChange={this.props.onChange}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              onChange={this.props.onChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              onChange={this.props.onChange}
            />
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              onChange={this.props.onChange}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              onChange={this.props.onChange}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
