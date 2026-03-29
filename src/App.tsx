import { useState } from "react";
import { useSearchUsers } from "./hooks/useSearchUsers";
import { Link } from "react-router-dom";
import ProfileSkeleton from "./components/ProfileSkeleton";

export default function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("torvalds");

  const { data: results, isLoading, isError, error } = useSearchUsers(query);

  const handleSearch = () => {
    setQuery(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
        GitHub Profile Finder
      </h1>

      {/* Search Bar */}
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search GitHub users..."
          className="p-3 w-80 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        {["torvalds", "gaearon", "yyx990803", "kentcdodds"].map((name) => (
          <button
            key={name}
            onClick={() => setQuery(name)}
            className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition text-sm"
          >
            {name}
          </button>
        ))}
      </div>

      <div className="text-center mt-2 text-gray-600">
        <h2 className="text-xl font-semibold">
          Search for any GitHub developer
        </h2>
        <p className="mt-2">
          Enter a username to view profile details, followers and repositories.
        </p>
      </div>

      {results && (
        <p className="text-gray-700 mb-6 text-lg font-semibold">
          {results.length} developers found for "
          <span className="text-blue-600">{query}</span>"
        </p>
      )}

      {/* Loading */}
      {isLoading && <ProfileSkeleton />}

      {/* Error */}
      {isError && (
        <div className="text-red-500 font-semibold mb-4">
          {(error as Error).message}
        </div>
      )}

    
      {results?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((user) => (
            <div
              key={user.login}
              className="bg-white p-4 rounded-xl shadow flex flex-col items-center hover:scale-105 transform transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full border-2 border-gray-300"
              />
              <h2 className="mt-4 font-bold text-lg">{user.login}</h2>

              <Link
                to={`/profile/${user.login}`}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* No results */}
      {query && results?.length === 0 && (
        <div className="text-center mt-8">
          <p className="text-red-500 font-semibold text-lg">No users found</p>
          <p className="text-gray-500">Try searching another username.</p>
        </div>
      )}
    </div>
  );
}
