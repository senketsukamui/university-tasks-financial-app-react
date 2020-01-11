import { combineReducers } from "redux";
import categoryReducer from "../reducers/category";

export default combineReducers({
  category: categoryReducer
});
