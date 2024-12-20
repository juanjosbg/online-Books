import React, { useState } from "react";

interface SearchBookProps {
  onSearch: (results: any[]) => void;
  onCancelSearch: () => void;
}

const SearchBook: React.FC<SearchBookProps> = ({
  onSearch,
  onCancelSearch,
}) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!query) {
      setError("Please enter a search term");
      return;
    }

    try {
      const googleBooksResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const googleBooksData = await googleBooksResponse.json();

      if (googleBooksData.items?.length) {
        onSearch(googleBooksData.items);
        return;
      }

      const openLibraryResponse = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const openLibraryData = await openLibraryResponse.json();

      if (openLibraryData.docs?.length) {
        onSearch(openLibraryData.docs);
      } else {
        setError("No results found in either Google Books or OpenLibrary.");
      }
    } catch (err) {
      setError("An error occurred while searching.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-between space-x-4"
      >
        <div className="uppercase font-bold text-lg">
          <h2>LOGO</h2>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          className="bg-gray-50 border text-sm rounded-lg p-2.5 w-full"
        />
        <button
          type="button"
          onClick={onCancelSearch}
          className="ml-2 bg-red-500 text-white px-4 py-2 rounded-full"
        >
          X
        </button>

        <button
          type="submit"
          className="ml-4 bg-teal-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default SearchBook;
