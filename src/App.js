import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { petfinder } from "./helpers";
import { Provider } from "./components/SearchContext";
import Results from "./components/Results";
import Details from "./components/Details";
import SearchQuery from "./components/SearchQuery";
import Nav from "./components/Nav";
import Shelters from "./components/Shelters";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Raleigh, NC",
      animal: "",
      breed: "",
      breeds: [],
      shelters: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds,
      getShelters: this.getShelters
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

  getShelters = () => {
    petfinder.shelter
      .find({
        location: this.state.location,
        output: "full"
      })
      .then(res => this.setState({ shelters: res.petfinder.shelters.results }));
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
            <Shelters path="/shelters" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));
