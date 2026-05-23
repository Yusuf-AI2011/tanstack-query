import axios from "axios";

const todos_api = "http://localhost:3000/todos";
const users_api = "http://localhost:3000/users";

// Todos GET
export const getTodos = async () => {
  const response = await axios.get(todos_api);
  return response?.data;
};
// Todos POST
export const postTodos = async (newTodo) => {
  const response = await axios.post(todos_api, newTodo);
  return response?.data;
};
// Users GET
export const getUsers = async () => {
  const response = await axios.get(users_api);
  return response?.data;
};
// Users POST
export const postUsers = async (newUser) => {
  const response = await axios.post(users_api, newUser);
  return response?.data;
};
