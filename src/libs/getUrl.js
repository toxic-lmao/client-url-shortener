export const getUrl = async ({ url, custom }) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, custom }),
    });

    const data = await response.json();

    return data.url;
  } catch (error) {
    return error.message;
  }
};
