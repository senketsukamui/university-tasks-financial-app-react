export const postRequest = (url, body = {}, headers = {}) => {
  fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
};
