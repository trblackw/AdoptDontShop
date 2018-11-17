import React, { createContext } from "react";

const SearchContext = createContext({
  location: "Raleigh, NC",
  animal: "",
  breed: "",
  breeds: [],
  shelters: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {},
  getShelters() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
