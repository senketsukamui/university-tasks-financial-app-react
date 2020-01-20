export const postRequest = (url, body = {}, headers = {}) => {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
};

export const getRequest = (url, body = {}, headers = {}) => {
  return fetch(url, {
    headers
  });
};
 