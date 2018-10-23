import { CHANGE_BREEDS } from "../actionCreators/getBreeds";

export default function(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_BREEDS:
      return payload;
    default:
      return state;
  }
}
