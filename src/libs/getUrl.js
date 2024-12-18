import axios from "axios";

export const getUrl = async ({ url, alias }) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL, {
      url,
      alias,
    });

    return response.data.url;
  } catch (error) {
    console.error(error);
    return error;
  }
};
