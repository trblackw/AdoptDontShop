import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./components/Results";
import Details from "./components/Details";
import Search from "./components/Search";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Search /> */}
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
