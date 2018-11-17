import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";
import { getPhotos } from "../helpers";
import PropTypes from "prop-types";

class Pet extends Component {
  state = {
    photos: []
  };
  static getDerivedStateFromProps = ({ media }) => getPhotos(media);
  render() {
    const { name, location, id } = this.props;
    let profileImage = "";
    let { photos } = this.state;
    if (photos[0] && photos[0].value) {
      profileImage = photos[0].value;
    } else {
      profileImage = "http://placecorgi.com/300/300";
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

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Pet;

export const ImageContainer = styled("div")`
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

const PetDetails = styled("div")`
  margin: 0 auto;
  padding: 1em;
  text-align: center;
  h2,
  h4 {
    font-family: "Varela Round", sans-serif;
  }
`;
