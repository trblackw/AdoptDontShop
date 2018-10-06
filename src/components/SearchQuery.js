import React, { Component } from "react";
import styled from "styled-components";
import { ANIMALS } from "petfinder-client";

class SearchQuery extends Component {
  state = {
    location: "Raleigh, NC",
    animal: "",
    breed: ""
  };

  handleLocationInput = e => {
    this.setState({
      location: e.target.value
    });
  };

  handleAnimalChange = e => {
    this.setState({
      animal: e.target.value
    });
  };
  render() {
    return (
      <QueryContainer>
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
          name=""
          id="animal"
          defaultValue={this.state.animal}
          onChange={this.handleAnimalChange}
          onBlur={this.handleAnimalChange}
        >
          <option value="" />
          {ANIMALS.map(animal => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </QueryContainer>
    );
  }
}

export default SearchQuery;

const QueryContainer = styled.div`
  margin: 0 auto;
  padding: 1.5em;
  width: 85%;
  border-radius: 5px;
  input, select {
    padding: 0.5em 0.7em;
    margin: 0 auto;
    width: 40%;
    border-radius: 5px;
  }
  label {
    display: block;
    margin: .6em 0.6em;
  }

`;
