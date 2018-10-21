import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { petfinder } from "./helpers";
import { Provider } from "./components/SearchContext";
import Results from "./components/Results";
import Details from "./components/Details";
import SearchQuery from "./components/SearchQuery";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Raleigh, NC",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds
    };
  }

  handleLocationChange = e => this.setState({ location: e.target.value });

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value
      },
      this.getBreeds
    );
  };

  handleBreedChange = e =>
    this.setState({ breed: e.target.value }, () =>
      console.log(this.state.breed)
    );

  getBreeds = () => {
    return this.state.animal
      ? petfinder.breed.list({ animal: this.state.animal }).then(data => {
          const breeds = data.petfinder.breeds;
          return data.petfinder && Array.isArray(breeds && breeds.breed)
            ? this.setState({ breeds: breeds.breed })
            : this.setState({ breeds: [] });
        })
      : this.setState({ breeds: [] });
  };

  render() {
    return (
      <div>
        <Nav />
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchQuery path="/search-query" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));
