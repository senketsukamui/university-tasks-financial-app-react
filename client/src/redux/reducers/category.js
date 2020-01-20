import ActionTypes from "../actions";
import _ from "lodash";

const initialState = { categories: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: { ...state.categories, [action.payload.title]: [] }
      };

    case ActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.data
      };

    case ActionTypes.ADD_FINANCE:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.finance.category]: [
            ..._.get(state.categories, action.payload.finance.category, []),
            _.omit(action.payload.finance, "category")
          ]
        }
      };

    default:
      return state;
  }
};
