import * as api from "../services";

export const getItems = async () => {
  try {
    const { data } = await api.getItems();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createItem = async (item) => {
  try {
    const { data } = await api.createItem(item);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user) => {
  try {
    const { data } = await api.loginUser(user);
    return data;
  } catch (error) {
    console.log(error);
  }
};
