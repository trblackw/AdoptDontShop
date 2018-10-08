import React, { Component } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import Carousel from "./Carousel";
import { petfinder, formatOptions } from "../helpers";
import { Button } from "./Search";

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
          loading: false,
          email: pet.contact.email,
          zip: pet.contact.zip,
          options: pet.options.option
        });
      })
      .catch(() => navigate("/"));
  };

  render() {
    const {
      name,
      animal,
      location,
      description,
      media,
      breed,
      zip,
      options,
      email
    } = this.state;
    if (this.state.loading) {
      return <h1>LOADING...</h1>;
    }
    return (
      <DetailsContainer>
        <Button onClick={() => navigate("/")} id="returnHome">
          Go back
        </Button>
        <Carousel
          media={media}
          name={name}
          animal={animal}
          breed={breed}
          location={location}
          zip={zip}
        />
        <div id="description" className="shadow">
          <h1>{name}</h1>
          <p>{description}</p>
          {Array.isArray(options) ? (
            <OptionsContainer>
              <ul>
                {formatOptions(options).map(option => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </OptionsContainer>
          ) : (
            <OptionsContainer>
              <ul>
                <li>{formatOptions(options)}</li>
              </ul>
            </OptionsContainer>
          )}
        </div>
        {email && (
          <Contact>
            To adopt {name}, contact: {email}
          </Contact>
        )}
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

  div#description {
    border: 1px solid #015f6d;
    background: whitesmoke;
    color: #015f6d;
    margin: 0.5em auto;
    padding: 1.5em;
    border-radius: 4px;
  }
`;
const OptionsContainer = styled.div`
  margin: 1em auto;
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  li {
    margin: 0.7em;
  }

  li:before {
    content: "✓";
    color: green;
    margin-right: 0.3em;
  }
`;
const Contact = styled.div`
  margin: 1em auto;
  background: #07889b;
  color: whitesmoke;
  padding: 1em;
  text-align: center;
`;
