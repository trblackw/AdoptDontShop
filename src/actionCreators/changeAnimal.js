export const CHANGE_ANIMAL = "CHANGE_ANIMAL";

export default function changeAnimal(animal) {
  return { type: CHANGE_ANIMAL, payload: animal };
}
