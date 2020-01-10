import ActionTypes from "../actions";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CATEGORY:
      return {
        ...state,
        [action.category]: []
      };
    case ActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.newCategories
      };
    default:
      return state;
  }
};
