import ActionTypes from "./index.js";

export const fetchCategories = () => dispatch => {
  return fetch("http://localhost:8000/api/get_info")
    .then(response => {
      return response.json();
    })
    .then(data => {
      let parsedData = data.data;
      dispatch({ type: ActionTypes.SET_CATEGORIES, parsedData });
    });
};

export const AddCategory = category => ({
  type: ActionTypes.ADD_CATEGORY,
  category
});

export const AddFinance = (finance, category) => ({
  type: ActionTypes.ADD_FINANCE,
  finance,
  category
});
