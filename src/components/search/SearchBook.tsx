import React, { useState } from "react";

interface SearchBookProps {
  onSearch: (results: any[]) => void;
  onCancelSearch: () => void;
}

const SearchBook: React.FC<SearchBookProps> = ({ onSearch, onCancelSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }

    try {
      // Fetch Google Books data
      const googleBooksResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
      );
      const googleBooksData = await googleBooksResponse.json();

      if (googleBooksData.items?.length) {
        onSearch(googleBooksData.items);
        return;
      }

      // Fetch Open Library data
      const openLibraryResponse = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const openLibraryData = await openLibraryResponse.json();

      if (openLibraryData.docs?.length) {
        onSearch(openLibraryData.docs);
      } else {
        setError("No results found in either Google Books or Open Library.");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("An error occurred while searching. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center space-x-4">
        <h2 className="uppercase font-bold text-lg">LOGO</h2>
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
          Search
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default SearchBook;
