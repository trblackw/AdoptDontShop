import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Results from "./components/Results";
import Details from "./components/Details";
import SearchQuery from "./components/SearchQuery";
import Nav from "./components/Nav";
import configureStore from "./store";

//REDUX
const App = () => (
  <Provider store={configureStore()}>
    <Fragment>
      <Nav />
      <Router>
        <Results path="/" />
        <Details path="/details/:id" />
        <SearchQuery path="/search-query" />
      </Router>
    </Fragment>
  </Provider>
);

export default App;

render(<App />, document.getElementById("root"));
