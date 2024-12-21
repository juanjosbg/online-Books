import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Sidebar from "./components/search/Sidebar";
import SearchBook from "./components/search/SearchBook";
import SearchResults from "./components/search/SearchResults";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const genres = ["Fiction", "Romance", "Programming", "Adventure", "Mystery"];

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setIsSearching(false); // Cancelar búsqueda al cambiar de género
    console.log(`Selected genre: ${genre}`);
  };

  const handleSearch = (results: any[]) => {
    setSearchResults(results);
    setIsSearching(true);
  };

  const handleCancelSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <section>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <Sidebar genres={genres} onGenreSelect={handleGenreSelect} />

        {/* Main Content */}
        <main className="w-3/7 bg-greenCont2">
          <div className="px-4 py-6 sm:px-6 lg:px-8 bg-whiteCont3">
            <SearchBook onSearch={handleSearch} onCancelSearch={handleCancelSearch} />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-black">
              {isSearching
                ? "Search Results"
                : selectedGenre
                ? `Books in ${selectedGenre}`
                : "Select a Genre"}
            </h2>
            <div className="gap-4 mt-5">
              {isSearching ? (
                <SearchResults results={searchResults} />
              ) : (
                <Home selectedGenre={selectedGenre} />
              )}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default App;
