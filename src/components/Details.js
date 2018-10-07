import React, { Component } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import Carousel from "./Carousel";
import { petfinder } from "../helpers";

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
        <Carousel
          media={media}
          name={name}
          animal={animal}
          breed={breed}
          location={location}
        />
        <h1>{name}</h1>
        <p>{description}</p>
      </DetailsContainer>
    );
  }
}

export default Details;

const DetailsContainer = styled.div`
  margin: 0 auto;
  padding: 1.5em;
  background-color: #eeaa7b;
  height: 100vh;
  h1 {
    font-family: "Varela Round", sans-serif;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 0.5em;
  }
`;
