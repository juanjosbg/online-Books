import React, { useState } from "react";
import "./App.css";
import SearchBook from "./components/SearchBook";
import BookList from "./components/BookList";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const genres = ["Fiction", "Romance", "Programming", "Adventure", "Mystery"];

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <section>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <Sidebar genres={genres} onGenreSelect={handleGenreSelect} />

        {/* Main Content */}
        <main className="w-3/4 bg-[#8496a2]">
          <div className="px-4 py-6 sm:px-6 lg:px-8 bg-whiteCont3">
            <SearchBook />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-black">
              {selectedGenre ? `Books in ${selectedGenre}` : "Select a Genre"}
            </h2>
            <div className="gap-4 mt-5">
              <BookList />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default App;
