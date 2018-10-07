import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

class Pet extends Component {
  render() {
    const { name, animal, media, location, id } = this.props;

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
            <h2>{name}</h2>
            <h4>{location}</h4>
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
  h2,
  h4 {
    font-family: "Varela Round", sans-serif;
  }
`;
