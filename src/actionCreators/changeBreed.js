export const CHANGE_BREED = "CHANGE_BREED";

export default function changeBreed(breed) {
  return { type: CHANGE_BREED, payload: breed };
}
