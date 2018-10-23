import { CHANGE_ANIMAL } from "../actionCreators/changeAnimal";

export default function animalReducer(state = "", action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_ANIMAL:
      return payload;
    default:
      return state;
  }
}
