export const CHANGE_LOCATION = "CHANGE_LOCATION";

export default function changeLocation(location) {
  return { type: CHANGE_LOCATION, payload: location };
}
