import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badges from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badges
    first_name="Kevin"
    last_name="Zarama"
    avatar_url="https://picsum.photos/200/200/?image=1036"
    job_title="System Engineer"
    github="Kzarama"
  />,
  container
);
