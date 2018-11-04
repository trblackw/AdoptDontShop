export default function breedReducer(state = "", action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_BREED":
      return payload;
    case "SET_ANIMAL":
      return "";
    default:
      return state;
  }
}
