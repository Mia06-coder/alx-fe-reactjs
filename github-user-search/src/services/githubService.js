import axios from "axios";

export async function fetchUserData(username) {
  const API_BASE_URL = `https://api.github.com/users/${username}`;

  const response = await axios.get(API_BASE_URL, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data;
}
