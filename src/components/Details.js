import React, { Component } from 'react'
import pf from "petfinder-client";
import { navigate } from "@reach/router";

const petfinder = pf({
   key: process.env.API_KEY,
   secret: process.env.API_SECRET
 });


class Details extends Component {
   state = {
      loading: true
   }

   componentDidMount() {
      this.getPet()
   }

   getPet = () => {
      petfinder.get({
         output: "full",
         id: this.props.id
      }).then(results => {
         const pet = results.petfinder.pet;
         let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
         this.setState({
            name: pet.name,
            animal: pet.animal,
            location: `${pet.contact.city}, ${pet.contact.state}`,
            description: pet.description,
            media: pet.media,
            breed,
            loading: false
         })
      }).catch(() => navigate("/"))
   }

  render() {
    return (
      <div>
        DETAILS
      </div>
    )
  }
}

export default Details;
