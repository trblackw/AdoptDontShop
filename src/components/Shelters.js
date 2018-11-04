import React, { Component, Fragment } from "react";
import { petfinder } from "../helpers";

export default class Shelters extends Component {
  state = {
    shelters: []
  };
  componentDidMount = () => {
    const sheltersRes = petfinder.shelter
      .find({
        location: "Raleigh, NC",
        output: "full"
      })
      .then(res => this.setState({ shelters: res.petfinder.shelters }));
  };
  render() {
    const { shelter: shelters } = this.state.shelters;
    return (
      <div>
        <ul>{shelters && shelters.map(shelter => <li>{shelter.name}</li>)}</ul>
      </div>
    );
  }
}
