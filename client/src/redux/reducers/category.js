import ActionTypes from "../actions";

const initialState = { categories: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: { ...state.categories, [action.category]: [] }
      };
    case ActionTypes.SET_CATEGORIES:
      console.log("reducer check");
      return {
        ...state,
        categories: action.parsedData
      };
    case ActionTypes.ADD_FINANCE:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.category]: [
            ...state.categories[action.category],
            action.finance
          ]
        }
      };
    default:
      return state;
  }
};
