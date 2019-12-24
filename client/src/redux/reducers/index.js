import { combineReducers } from "redux";
import financeReducer from "../reducers/finance";
import categoryReducer from "../reducers/category";

export default combineReducers({
  finance: financeReducer,
  category: categoryReducer
});
