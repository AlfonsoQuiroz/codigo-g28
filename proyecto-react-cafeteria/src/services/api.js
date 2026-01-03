const BASE_URL = "https://69589a0e6c3282d9f1d5594c.mockapi.io/products";

export async function getProducts() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}