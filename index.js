import React, { Component } from "react";
import { render } from "react-dom";
import UseEffectHook from "./UseEffectHook";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <UseEffectHook />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
