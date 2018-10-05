import React, { Component } from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";
import styled from "styled-components";
import Carousel from "./Carousel";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.getPet();
  }

  getPet = () => {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(results => {
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
        });
      })
      .catch(() => navigate("/"));
  };

  render() {
    const { name, animal, location, description, media, breed } = this.state;
    if (this.state.loading) {
      return <h1>LOADING...</h1>;
    }
    return (
       <DetailsContainer>
          <button onClick={() => navigate("/")}>Go back</button>
        <Carousel media={media} />
        <h1>{name}</h1>
        <h4>{`${name} is a ${breed} ${animal} in ${location}`}</h4>
        <p>{description}</p>
      </DetailsContainer>
    );
  }
}

export default Details;

const DetailsContainer = styled.div`
  margin: 0 auto;
  padding: 1.5em;
  background-color: #EEAA7B;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 0.5em;
  }
`;
