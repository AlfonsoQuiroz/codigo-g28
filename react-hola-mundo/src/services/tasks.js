import { BASE_URL, TASK_URL, makeRequestWithAuthorization } from "./api";

const TASKS_URL = `${BASE_URL}${TASK_URL}/`;

// Metodo: GET (Defualt)
export async function getTaskFromAPI() {
  const data = await makeRequestWithAuthorization({
    url: TASKS_URL,
  });
  return data;
}

// Metodo: POST
// task: Es el objeto que contiene el json con la data
export async function createTaskToAPI(task) {
  const data = await makeRequestWithAuthorization({
    url: TASKS_URL,
    body: task,
    method: "POST",
  });
  return data;
}

// Metodo: PUT -> `BASE_URL/id` (Actualizar)
export async function updateTaskFromAPI(id, task) {
  const data = await makeRequestWithAuthorization({
    url: `${TASKS_URL}${id}`,
    method: "PUT",
    body: task,
  });
  return data;
}

// Metodo: DELETE -> `BASE_URL/id`
// id: es el identificador unico de cada tarea
export async function deleteTaskFromAPI(id) {
  const data = await makeRequestWithAuthorization({
    url: `${TASKS_URL}${id}`,
    method: "DELETE",
  });

  return data;
}