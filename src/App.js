import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./components/Results";

export default class App extends Component {
  render() {
    return (
      <div>
        <Results />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
