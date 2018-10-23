import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

const middleware = [thunk, logger];

export default function configureStore() {
   return createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(...middleware))
   );
 }
 