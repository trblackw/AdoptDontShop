import React, { Component } from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import { getBreed } from "../helpers";
import styled from "styled-components";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: "Raleigh, NC"
      })
      .then(results => {
        const { pets } = results.petfinder;
        this.setState({ pets: pets.pet });
      });
  };
   render() {
     
    return (
      <div>
        <input type="text" />
        <PetContainer>
          {this.state.pets.map(pet => {
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

export default Results;

const PetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
  flex-wrap: wrap;
`;
