import React, { Component, Fragment } from "react";
import styled from "react-emotion";
import { ANIMALS } from "petfinder-client";
import { connect } from "react-redux";
import getBreeds from "../actionCreators/getBreeds";
import changeBreed from "../actionCreators/changeBreed";
import changeAnimal from "../actionCreators/changeAnimal";
import changeLocation from "../actionCreators/changeLocation";

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.search();
  };

  render() {
    const {
      location,
      handleLocationChange,
      animal,
      handleAnimalChange,
      breeds,
      breed,
      handleBreedChange
    } = this.props;
    return (
      <QueryForm onSubmit={this.handleSubmit} className="drop-shadow">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          defaultValue={location}
          id="location"
          placeholder="Location"
          onChange={handleLocationChange}
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={handleAnimalChange}
          onBlur={handleAnimalChange}
        >
          <option>Select an animal</option>
          {ANIMALS.map(animal => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
        {breeds.length > 0 && (
          <Fragment>
            <label htmlFor="breed">Breed</label>
            <select
              id="breed"
              defaultValue={breed}
              onChange={handleBreedChange}
              onBlur={handleBreedChange}
            >
              {breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <Button
              onClick={() =>
                console.log(
                  `Showing ${breed} ${animal}s in or near ${location}`
                )
              }
            >
              Search
            </Button>
          </Fragment>
        )}
      </QueryForm>
    );
  }
}

const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  animal,
  location
});

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(e) {
    dispatch(changeAnimal(e.target.value));
     dispatch(getBreeds());
     console.log('changing animals')
  },
  handleBreedChange(e) {
    dispatch(changeBreed(e.target.value));
  },
  handleLocationChange(e) {
    dispatch(changeLocation(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

const QueryForm = styled("form")`
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

export const Button = styled("button")`
  background: #e37222;
  color: whitesmoke;
  padding: 0.7em;
  width: 15%;
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
