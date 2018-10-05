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
      <Link to={`details/${id}`}>
        <ImageContainer>
          <img src={profileImage} alt={name} />
        </ImageContainer>
        <PetDetails>
          <h1>{name}</h1>
          <h3>{`${animal} -- ${location}`}</h3>
        </PetDetails>
      </Link>
    );
  }
}

export default Pet;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  clip-path: circle(50% at 50% 50%);
  margin: 0 auto;

  img {
    width: 100px;
    min-height: 100px;
    object-fit: cover;
  }
`;

const PetDetails = styled.div`
  margin: 0 auto;
  padding: 1em;
  text-align: center;
`;
