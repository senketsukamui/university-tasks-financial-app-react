import ActionTypes from "./index.js";

export const AddCategory = category => ({
  type: ActionTypes.ADD_CATEGORY,
  category
});
