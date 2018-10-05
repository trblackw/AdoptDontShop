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
        location: "Wilson, NC"
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
        <PetGrid>
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
        </PetGrid>
      </div>
    );
  }
}

export default Results;

const PetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1em;
  margin: 1em auto;
  padding: 1em;
`;
