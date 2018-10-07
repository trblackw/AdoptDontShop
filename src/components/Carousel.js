import React, { Component, Fragment } from "react";
import { getPhotos } from "../helpers";
import { ImageContainer } from "./Pet";
import styled from "styled-components";

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
    const { name, breed, animal, location } = this.props;
    return (
      <Fragment>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "Varela Round, sans-serif"
          }}
        >{`${name} is a ${breed} ${animal} in ${location}`}</h3>
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

export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  background-color: #66b9bf;
  border: 3px solid #07889b;
  border-radius: 10px;

  img {
    max-width: 45%;
    max-height: 400px;
  }

  div > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: inline-block;
    margin: 15px;
    cursor: pointer;
    border: 2px solid #333;
    object-fit: cover;
  }
`;
