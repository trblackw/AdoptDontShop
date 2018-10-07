import React, { Component, Fragment } from "react";
import styled from "styled-components";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchQuery extends Component {
  state = {
    location: "Raleigh, NC",
    animal: "",
    breed: "",
    breeds: []
  };

  handleSubmit = e => e.preventDefault();

  handleLocationInput = e => this.setState({ location: e.target.value });

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value,
        breed: ""
      },
      this.getBreeds
    );
  };

  handleBreedChange = e => this.setState({ breed: e.target.value });

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
      <QueryForm onSubmit={this.handleSubmit} className="drop-shadow">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          defaultValue={this.state.location}
          id="location"
          placeholder="Location"
          onFocus={e => (e.target.value = "")}
          onBlur={e => (e.target.value = this.state.location)}
          onChange={this.handleInput}
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          defaultValue={this.state.animal}
          onChange={this.handleAnimalChange}
          onBlur={this.handleAnimalChange}
        >
          <option>Select an animal</option>
          {ANIMALS.map(animal => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
        {this.state.breeds.length > 1 && (
          <Fragment>
            <label htmlFor="breed">Breed</label>
            <select
              id="breed"
              defaultValue={this.state.breed}
              onChange={this.handleBreedChange}
              onBlur={this.handleBreedChange}
            >
              {this.state.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <button id="submit">Search</button>
          </Fragment>
        )}
      </QueryForm>
    );
  }
}

export default SearchQuery;

const QueryForm = styled.form`
  margin: 1em auto;
  padding: 1.5em;
  background: #66b9bf;
  color: whitesmoke;
  width: 80%;
  border: 1px solid #07889b;
  border-radius: 5px;
  input,
  select {
    padding: 0.5em 0.7em;
    margin: 0 auto;
    width: 40%;
    border-radius: 5px;
  }
  label {
    display: block;
    margin: 0.6em 0.6em;
  }

  button#submit {
    background: #e37222;
    color: whitesmoke;
    padding: 0.5em;
    border: none;
    border-radius: 2px;
    display: block;
    margin-top: 1.5em;
    &:hover {
      background: #07889b;
      color: whitesmoke;
      cursor: pointer;
    }
  }
`;
