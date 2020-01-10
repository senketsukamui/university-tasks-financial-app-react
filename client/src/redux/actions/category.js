import ActionTypes from "./index.js";

export const fetchCategories = () => dispatch => {
  return fetch("http://localhost:8000/api/get_info").then(json => {
    dispatch({ type: ActionTypes.SET_CATEGORIES, json });
  });
  //
};

export const AddCategory = category => ({
  type: ActionTypes.ADD_CATEGORY,
  category
});
