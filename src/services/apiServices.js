import { createHashHistory } from "history";

export function apiRequest(request) {
  const browserHistory = createHashHistory();

  return new Promise((resolve, reject) => {
    let fetchData = {
      method: request.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    };

    let fetchUrl = request.url;

    if (request.data) {
      fetchData["body"] = request.data;
    }

    fetch(fetchUrl, fetchData)
      .then(response => {
        if (response.status === 401) {
          // browserHistory.push("/auth/login");
        } else if (response.status < 400) {
          resolve(response.json());
        } else {
          reject(response.json());
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function apiPost(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  });

  return await response.json();
}

export async function apiDelete(url, data = {}) {
  const response = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  });

  return await response.json();
}



export async function apiGet(url = "") {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(res => res.json());
  return await response;
}

