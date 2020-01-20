import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const store = (() => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
  return createStore(rootReducer, initialState, enhancer);
})();

export default store;
