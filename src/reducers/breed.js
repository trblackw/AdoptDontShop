import { CHANGE_BREED } from "../actionCreators/changeBreed";
import { CHANGE_ANIMAL } from "../actionCreators/changeAnimal";

export default function breedReducer(state = "", action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_BREED:
      return payload;
    case CHANGE_ANIMAL:
      return "";
    default:
      return state;
  }
}
