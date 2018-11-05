import React, { Component, Fragment } from "react";
import { petfinder } from "../helpers";
import styled from "react-emotion";

export default class Shelters extends Component {
  state = {
    shelters: []
  };
  componentDidMount = () => {
    petfinder.shelter
      .find({
        location: "Raleigh, NC",
        output: "full"
      })
      .then(res => this.setState({ shelters: res.petfinder.shelters }));
  };

  getShelterLocation = (lat, lng) => {
    fetch(`https://www.google.com/maps?q=${lat},${lng}`);
  };
  render() {
    const { shelter: shelters } = this.state.shelters;
    //  if (shelters && shelters.length > 0) {
    //    const coords = shelters.map(item => ({
    //      lat: item.latitude,
    //      lng: item.longitude
    //    }));
    //    console.log(this.getShelterLocation(coords[0].lat, coords[0].lng));
    //  }
    console.log(shelters);
    return (
      <SheltersContainer className="drop-shadow">
        <SheltersList>
          {shelters &&
            shelters.map(shelter => <li key={shelter.id}>{shelter.name}</li>)}
        </SheltersList>
      </SheltersContainer>
    );
  }
}

const SheltersContainer = styled("div")`
  margin: 1.3em auto;
  padding: .5em;
  background: #66b9bf;
  width: 65%;
  height: auto;
`;

const SheltersList = styled("ul")`
  list-style: none;
  padding: 1.5em;
  margin: 1.5em auto;

  li {
    margin: 1em auto;
    font-size: 1.5em;
  }
`;
