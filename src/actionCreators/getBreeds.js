import { petfinder } from "../helpers";
export const CHANGE_BREEDS = "CHANGE_BREEDS";

export default function getBreeds() {
  return function(dispatch, getState) {
    const { animal } = getState();
    petfinder.breed
      .list({ animal })
      .then(data => {
        let breeds = [];
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          breeds = data.petfinder.breeds.breed;
          dispatch({ type: CHANGE_BREEDS, payload: breeds });
        } else {
          dispatch({ type: CHANGE_BREEDS, payload: [] });
        }
      })
      .catch(err => console.log(err));
  };
}
