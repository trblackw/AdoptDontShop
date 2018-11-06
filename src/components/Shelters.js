import React, { Component, Fragment } from "react";
import { petfinder, getLocation, getPlaceDetails } from "../helpers";
import styled from "react-emotion";
import { Consumer } from "./SearchContext";
import { Button } from "./Search";
import Toggle from "./Toggle";

class Shelters extends Component {
  state = {
    shelters: []
  };
  componentDidMount = () => {
    const { location } = this.props.searchParams;
    petfinder.shelter
      .find({
        location,
        output: "full"
      })
      .then(res => this.setState({ shelters: res.petfinder.shelters }));
  };

  render() {
    const { shelter: shelters } = this.state.shelters;
    const {
      location: searchLocation,
      handleLocationChange
    } = this.props.searchParams;

    if (shelters && shelters.length > 0) {
      const coords = shelters.map(item => ({
        lat: item.latitude,
        lng: item.longitude,
        name: item.name
      }));
      const test = coords.map(location =>
        getLocation(location.lat, location.lng)
      );
    }

    return (
      <SheltersContainer className="drop-shadow">
        <div className="shelters shadow">
          <Toggle>
            {({ toggle, on }) => (
              <Fragment>
                <Button
                  onClick={toggle}
                  style={{ width: "auto", marginBottom: 0 }}
                >
                  Modify search
                </Button>
                {on && (
                  <Fragment>
                    <input
                      type="text"
                      placeholder="New Location"
                      onChange={handleLocationChange}
                    />
                    <button>Go!</button>
                  </Fragment>
                )}
              </Fragment>
            )}
          </Toggle>
          <SheltersList>
            <small>{searchLocation}</small>
            {shelters &&
              shelters.map(shelter => (
                <Fragment>
                  <li key={shelter.id}>{shelter.name}</li>
                  <hr />
                </Fragment>
              ))}
          </SheltersList>
        </div>
      </SheltersContainer>
    );
  }
}

export default function SheltersWithContext(props) {
  return (
    <Consumer>
      {context => <Shelters {...props} searchParams={context} />}
    </Consumer>
  );
}

const SheltersContainer = styled("div")`
  margin: 1.3em auto;
  padding: 0.5em;
  background: #66b9bf;
  width: 65%;
  height: auto;
  border-radius: 4px;
  text-align: center;

  input {
    padding: 0.5em 0.7em;
    margin: 1em auto;
    width: 60%;
    border-radius: 5px;
  }

  div.shelters {
    background: whitesmoke;
    padding: 1em;
    margin: 1.5em;
    border-radius: 5px;
  }
`;

const SheltersList = styled("ul")`
  list-style: none;
  padding: 1.5em;
  margin: 0 auto;
  color: black;

  small {
    color: #07889b;
    font-weight: bold;
  }

  li:nth-child(n + 2) {
    margin: 1em auto;
  }

  li {
    font-size: 1.5em;
    margin-bottom: 1em;
  }

  hr {
    /* height: 1px; */
    border: 0;
    border-top: 1px solid #66b9bf;
  }
`;
