import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    composeWithDevTools
  )
);
