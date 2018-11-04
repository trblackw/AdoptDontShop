export default function animalReducer(state = "", action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ANIMAL":
      return payload;
    default:
      return state;
  }
}
