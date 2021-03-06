import axios from "axios";
import URL from "../config/url";

export const somefunc = () => {
  const token = JSON.parse(localStorage.getItem("token")).token;
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const getItems = () => axios.get(URL);
export const createItem = (item) => {
  const headers = somefunc();
  axios.post(URL, item, {
    headers,
  });
};

export const loginUser = (user) => axios.post(URL, user);
