import { useState } from "react";
import {
  fetchUserData,
  fetchAdvancedUserData,
} from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchAdvancedUserData({
        username,
        location,
        minRepos,
      });

      // Fetch extra details for each user
      const detailedUsers = await Promise.all(
        data.items.map(async (user) => {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        })
      );
      setUsers(detailedUsers);
      setTotalCount(data.total_count);
    } catch (err) {
      setError("Looks like we cant find the user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchAdvancedUserData(
        { username, location, minRepos },
        nextPage
      );

      const detailedUsers = await Promise.all(
        data.items.map(async (user) => {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        })
      );

      setUsers((prev) => [...prev, ...detailedUsers]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Location (e.g. London)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition md:col-span-3"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-10">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {users.length > 0 && (
          <>
            <p className="text-gray-500 mb-2">results: {totalCount}</p>
            <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="p-4 border rounded-lg flex items-start gap-4"
                >
                  <img
                    src={user.avatar_url}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{user.login}</h3>
                    {user.name && <p className="opacity-90">{user.name}</p>}
                    {user.bio && (
                      <p className="text-sm opacity-60">{user.bio}</p>
                    )}
                    {user.location && (
                      <p className="text-sm opacity-60">📍 {user.location}</p>
                    )}
                    <p className="text-sm opacity-80 mb-3">
                      📦 Repos:{" "}
                      <span className="font-semibold">{user.public_repos}</span>
                    </p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Load More */}
        {users.length > 0 && users.length < totalCount && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold"
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <p className="text-gray-500">No users found. Try another search.</p>
        )}
      </div>
    </div>
  );
}
