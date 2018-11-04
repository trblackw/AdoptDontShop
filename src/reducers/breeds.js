export default function breedsReducer(state = "", action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_BREEDS":
      return payload;
    default:
      return state;
  }
}
