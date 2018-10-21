import React, { Component } from "react";
import Pet from "./Pet";
import { petfinder, getUserLocation } from "../helpers";
import styled from "react-emotion";
import Search from "./Search";
import { Consumer } from "./SearchContext";

class Results extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    const { location, animal, breed } = this.props.searchParams;
    petfinder.pet
      .find({
        output: "full",
        location,
        animal,
        breed,
        count: 50
      })
      .then(results => {
        const { pets } = results.petfinder;
        this.setState({ pets: pets.pet });
      });
  };
  render() {
    return (
      <div>
        <Search search={this.search} />
        <PetContainer>
          {this.state.pets
            .filter(pet => pet.name.split(" ").length < 3)
            .map(pet => {
              let breed;
              if (Array.isArray(pet.breeds.breed)) {
                breed = pet.breeds.breed.join(", ");
              } else {
                breed = pet.breeds.breed;
              }
              return (
                <Pet
                  animal={pet.animal}
                  key={pet.id}
                  name={pet.name}
                  breed={breed}
                  media={pet.media}
                  location={`${pet.contact.city}, ${pet.contact.state}`}
                  id={pet.id}
                  sex={pet.sex}
                />
              );
            })}
        </PetContainer>
      </div>
    );
  }
}

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}

const PetContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
  flex-wrap: wrap;
`;
