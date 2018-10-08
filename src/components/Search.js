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
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                >
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
                <Button
                  onClick={() =>
                    console.log(
                      `Showing ${context.breed} ${context.animal}s in or near ${
                        context.location
                      }`
                    )
                  }
                >
                  Search
                </Button>
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
  text-align: center;
  border: 1px solid #07889b;
  border-radius: 5px;
  input,
  select {
    padding: 0.5em 0.7em;
    margin: 0 auto;
    width: 60%;
    border-radius: 5px;
  }
  label {
    display: block;
    margin: 0.4em;
    font-family: "Varela Round", sans-serif;
  }
`;

export const Button = styled.button`
  background: #e37222;
  color: whitesmoke;
  padding: 0.7em;
  width: 20%;
  border: none;
  border-radius: 2px;
  display: block;
  margin: 1em auto;
  &:hover {
    background: #07889b;
    color: whitesmoke;
    cursor: pointer;
  }
`;
