import { CHANGE_LOCATION } from "../actionCreators/changeLocation";



export default function locationReducer(state = "Raleigh, NC", action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LOCATION:
      return {
        payload
      };
    default:
      return state;
  }
}
