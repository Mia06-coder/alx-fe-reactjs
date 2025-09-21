import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-150 w-full border-2 border-gray-300 rounded-lg flex"
      >
        <input
          type="text"
          placeholder="Search GitHub User..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 w-full focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-300 text-blue-600 font-semibold rounded-r-sm"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-4">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {user && (
          <div className="p-4 border rounded-lg flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{user.name || user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
