import { BASE_URL, AUTH_URL, validateAuthorization } from "./api";

/**
 *
 * @param {*} body
 * body: {
 *   email: "",
 *   password: ""
 * }
 */
export async function login(body) {
  try {
    const response = await fetch(`${BASE_URL}${AUTH_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error("Error del servidor");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @param {*} body
 * body: {
 *   nombre: ""
 *   email: "",
 *   password: ""
 * }
 */
export async function registro(body) {
  try {
    const response = await fetch(`${BASE_URL}${AUTH_URL}/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error("Error del servidor");

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function cambiarPassword(body) {
  try {
    const response = await fetch(`${BASE_URL}${AUTH_URL}/cambiar-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(body),
    });

    if (!validateAuthorization(response)) return;

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}