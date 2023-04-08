const requestURL = "https://jsonplaceholder.typicode.com/albums";

function sendHttpRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    return response.json();
  });
}

const body = {
  name: "Lazzat",
  age: 16,
};

sendHttpRequest("POST", requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
