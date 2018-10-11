import React, { Component, Fragment } from "react";
import { getPhotos } from "../helpers";
import styled from "styled-components";
import PropTypes from "prop-types";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    return getPhotos(media);
  }

  handleClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
     const { name, breed, animal, location, zip } = this.props;
    return (
      <Fragment>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "Varela Round, sans-serif"
          }}
        >{`${name} is a ${breed} ${animal} in ${location} ${zip}`}</h3>
        <CarouselContainer>
          <img src={photos[active].value} alt="primary animal" />
          <div>
            {photos.map((photo, i) => (
              <img
                onClick={this.handleClick}
                key={photo.value}
                src={photo.value}
                data-index={i}
                alt="animal thumbnail"
                className={i === active ? "active" : ""}
              />
            ))}
          </div>
        </CarouselContainer>
      </Fragment>
    );
  }
}

Carousel.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
};

export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  background-color: #66b9bf;
  border: 3px solid #07889b;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
  }

  img {
    max-height: auto;
    max-width: 40%;
    margin-left: 1em;
    border: 3px solid #07889b;
    border-radius: 5px;
  }

  div > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: inline-block;
    margin: 15px;
    cursor: pointer;
    border: 2px solid #07889b;
    object-fit: cover;
  }
`;
