import axios from "axios";
import URL from "../config/url";

export const getItems = () => axios.get(URL);
export const createItem = (item) => axios.post(URL, item);
export const loginUser = (user) => axios.post(URL, user);