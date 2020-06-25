import React, { Component } from "react";

import "./styles/Loader.css";
import "./styles/PageLoading.css";

class Loading extends Component {
  render() {
    return (
      <div className="PageLoading">
        <div className="lds-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Loading;
