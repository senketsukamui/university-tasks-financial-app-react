import ActionTypes from "../actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CATEGORY:
      return {
        ...state,
        financeInfo: action.info
      };
    default: {
      return state;
    }
  }
};
