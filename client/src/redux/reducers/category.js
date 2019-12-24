import ActionTypes from "../actions";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CATEGORY:
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
};
