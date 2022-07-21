import axios from "axios";
import URL from "../config/url";

const token = JSON.parse(localStorage.getItem("token")).token;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const getItems = () => axios.get(URL);
export const createItem = (item) =>
  axios.post(URL, item, {
    headers,
  });
export const loginUser = (user) => axios.post(URL, user);
