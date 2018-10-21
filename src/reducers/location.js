export default function locationReducer(state = 'Raleigh, NC', action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOCATION":
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
