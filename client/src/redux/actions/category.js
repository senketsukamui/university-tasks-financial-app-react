import ActionTypes from "./index.js";
import { apiRoutes } from "../../api/routes.js";
import { getRequest, postRequest } from "../../api";

export const fetchCategories = () => dispatch =>
  getRequest(apiRoutes.getInfo)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("an error occured while getting categories");
    })
    .then(data => {
      dispatch({
        type: ActionTypes.SET_CATEGORIES,
        payload: { data: data.data }
      });
    });

export const createCategory = data => dispatch =>
  postRequest(apiRoutes.createCategory, data, {
    "Content-Type": "application/json"
  }).then(res => {
    if (res.ok) {
      dispatch({
        type: ActionTypes.ADD_CATEGORY,
        payload: { title: data.title }
      });
    } else {
      throw new Error(
        "an error occured while creating finance... reload the page"
      );
    }
  });

export const createFinance = data => dispatch =>
  postRequest(apiRoutes.createFinance, data, {
    "Content-Type": "application/json"
  }).then(res => {
    if (res.ok) {
      dispatch({
        type: ActionTypes.ADD_FINANCE,
        payload: {
          finance: data
        }
      });
    } else {
      throw new Error(
        "an error occured while creating finance... reload the page"
      );
    }
  });
