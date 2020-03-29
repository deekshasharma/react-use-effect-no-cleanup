import React, { Component } from "react";
import { render } from "react-dom";
import GithubUserInfo from "./GithubUserInfo";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <GithubUserInfo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
