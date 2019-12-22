import { combineReducers } from "redux";
import financeReducer from "../reducers/finance";

export default combineReducers({
  finance: financeReducer
});
