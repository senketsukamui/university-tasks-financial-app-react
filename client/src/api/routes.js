const hostname = "http://localhost:8000/api";

const constructApiUrl = route => `${hostname}/${route}`;

export const apiRoutes = {
  getInfo: constructApiUrl("get_info"),
  createCategory: constructApiUrl("post_category"),
  createFinance: constructApiUrl("post_finance")
};

export default apiRoutes;
