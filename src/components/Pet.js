import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

class Pet extends Component {
  render() {
    const {
      name,
      animal,
      breed,
      media,
      location,
      id,
      sex,
      size,
      description,
      shelterEmail
    } = this.props;

    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    let profileImage = "";
    if (photos[0] && photos[0].value) {
      profileImage = photos[0].value;
    }
    return (
      <div>
        <ImageContainer>
          <img src={profileImage} alt={name} />
        </ImageContainer>
        <PetDetails>
          <h1>{name}</h1>
          <h3>{`${animal} -- ${breed} -- ${location}`}</h3>
        </PetDetails>
      </div>
    );
  }
}

export default Pet;

const ImageContainer = styled.div`
  clip-path: ellipse(130px 140px at 10% 20%);
  width: 100px;
  height: 100px;
  margin: 1.5em;
  padding: 1em;

  img {
    width: 100px;
    min-height: 100px;
  }
`;

const PetDetails = styled.div`
  margin: 1em auto;
  padding: 1.5em;
`;
