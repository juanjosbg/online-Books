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

    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }

    try {
      // Fetch Google Books data
      const googleBooksResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}`
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
      <form onSubmit={handleSearch}>
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blueCont4">Kindle.</h1>
          <div className="flex items-center gap-4">
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
              className="text-red-500 font-medium"
            >
              X
            </button>
            <button className="text-blueCont3 font-medium">Registrar</button>
          </div>
        </header>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default SearchBook;
