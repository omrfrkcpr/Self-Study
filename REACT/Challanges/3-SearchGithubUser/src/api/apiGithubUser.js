import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const fetchUser = async (username) => {
  try {
    const response = await axios(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    console.error("fetchUser", error);
    throw new Error(error.message);
  }
};
