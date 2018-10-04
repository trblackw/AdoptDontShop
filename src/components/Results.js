import React, { Component } from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

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
    console.log(this.state.pets.map(pet => pet.breeds.breed));
    //  const {
    //    age,
    //    animal,
    //    breeds,
    //    contact,
    //    description,
    //    id,
    //    name,
    //    options,
    //    sex
    //  } = this.state.pets;
    return (
      <div>
        {this.state.pets.map(pet => (
          <div>
            <h1>
              {pet.name} ({pet.animal}: {pet.age}, {pet.sex})
            </h1>
            <ul>
              {Array.isArray(pet.breeds.breed) ? (
                pet.breeds.breed.map(breed => <li>{breed}</li>)
              ) : (
                <li>{pet.breeds.breed}</li>
              )}
            </ul>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
