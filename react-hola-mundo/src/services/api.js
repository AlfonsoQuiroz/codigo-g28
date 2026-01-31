export const BASE_URL = "http://127.0.0.1:5000/api";

export const AUTH_URL = "/auth";
export const TASK_URL = "/tareas";

export function validateAuthorization(response) {
  if (response.status === 401) {
    // limpiar localStorage
    localStorage.clear();
    window.location.href = "/login";
    return false;
  }
  return true;
}

export async function makeRequestWithAuthorization(requestObject) {
  try {
    const { url, method = "GET", body } = requestObject;
    const fetchConfig = {
      method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    };

    if (body) {
      fetchConfig.body = JSON.stringify(body);
    }

    const response = await fetch(url, fetchConfig);

    if (!validateAuthorization(response)) return;

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}