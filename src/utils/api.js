const BASE_URL = " http://localhost:7777";

const API = {
  changeTask: (data) =>
    fetch(`${BASE_URL}/todos/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }),

  getTask: () => fetch(`${BASE_URL}/todos`).then((res) => res.json()),
  deleteTask: (id) =>
    fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    }).then((res) => res.json()),
  createTask: (data) =>
    fetch(`${BASE_URL}/todos`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }),
};

export default API;
