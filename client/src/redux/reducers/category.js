import ActionTypes from "../actions";
import _ from "lodash";
const initialState = { categories: {} };
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: { ...state.categories, [action.category]: [] }
      };
    case ActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.parsedData
      };
    case ActionTypes.ADD_FINANCE:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: [
            ..._.get(state.categories, action.payload.category, []),
            action.payload.finance
          ]
        }
      };
    default:
      return state;
  }
};
