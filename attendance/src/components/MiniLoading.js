import React, { Component } from "react";

import "./styles/Loader.css";
import "./styles/PageLoading.css";

class MiniLoading extends Component {
  render() {
    return (
      <div className="lds-grid Mini">
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default MiniLoading;
