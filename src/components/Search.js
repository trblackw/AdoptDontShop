import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <QueryForm onSubmit={this.handleSubmit} className="drop-shadow">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              defaultValue={context.location}
              id="location"
              placeholder="Location"
              onChange={context.handleLocationChange}
            />
            <label htmlFor="animal">Animal</label>
            <select
              id="animal"
              value={context.animal}
              onChange={context.handleAnimalChange}
              onBlur={context.handleAnimalChange}
            >
              <option>Select an animal</option>
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
            {context.breeds.length > 0 && (
              <Fragment>
                <label htmlFor="breed">Breed</label>
                <select
                  id="breed"
                  defaultValue={context.breed}
                  onChange={e => {
                    context.handleBreedChange(e), this.props.search();
                  }}
                  onBlur={context.handleBreedChange}
                >
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
                <button type="submit" id="submit">
                  Search
                </button>
              </Fragment>
            )}
          </QueryForm>
        )}
      </Consumer>
    );
  }
}

export default Search;

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
    margin: 0.4em;
    font-family: "Varela Round", sans-serif;
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