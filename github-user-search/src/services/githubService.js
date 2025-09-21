import axios from "axios";

const API_BASE_URL = `https://api.github.com`;

export async function fetchUserData(username) {
  username.trim();

  const url = `${API_BASE_URL}/users/${username}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data;
}

export async function fetchAdvancedUserData({
  username,
  location,
  minRepos,
  page = 1,
}) {
  // Construct search query
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  query.trim();

  const url = `${API_BASE_URL}/search/users?q=${encodeURIComponent(
    query
  )}&page=${page}&per_page=10`;

  const response = await axios.get(url, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data;
}
