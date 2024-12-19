import React, { useState } from "react";

function SearchBook() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setResults([]);
    setError(null);

    if (!query) {
      setError("Please enter a search term");
      return;
    }

    try {
      // Intenta buscar en Google Books primero
      const googleBooksResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const googleBooksData = await googleBooksResponse.json();

      if (googleBooksData.items?.length) {
        setResults(googleBooksData.items);
        return;
      }

      // Si no hay resultados en Google Books, intenta en OpenLibrary
      const openLibraryResponse = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const openLibraryData = await openLibraryResponse.json();

      if (openLibraryData.docs?.length) {
        setResults(openLibraryData.docs);
      } else {
        setError("No results found in either Google Books or OpenLibrary.");
      }
    } catch (err) {
      setError("An error occurred while searching.");
    }
  };

  return (
    <section className="flex flex-col px-4 space-y-4">
      <div className="uppercase">
        <h2>LOGO</h2>
      </div>

      <form onSubmit={handleSearch} className="flex items-center max-w-sm mx-auto w-96">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..."
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-bold">
              {result.volumeInfo?.title || result.title}
            </h3>
            <p>
              {result.volumeInfo?.authors?.join(", ") ||
                result.author_name?.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchBook;
