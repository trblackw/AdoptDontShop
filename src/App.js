import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./components/Results";
import Details from "./components/Details";
import SearchQuery from "./components/SearchQuery";
import Nav from "./components/Nav";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchQuery path="/search-query" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
