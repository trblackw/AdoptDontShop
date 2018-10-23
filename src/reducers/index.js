import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

const rootReducer = combineReducers({
  location,
  animal,
  breed,
  breeds
});

export default rootReducer;
