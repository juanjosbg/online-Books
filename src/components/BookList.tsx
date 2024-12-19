// src/components/BookList.tsx
import React, { useEffect, useState } from "react";
import { fetchGoogleBooks } from "../services/googleBooksAPI";
import { fetchOpenLibraryBooks } from "../services/openLibraryAPI";
import BookSection from "./BookSection";

function BookList() {
  const [googleBooks, setGoogleBooks] = useState([]);
  const [openLibraryBooks, setOpenLibraryBooks] = useState([]);
  const [loadingGoogle, setLoadingGoogle] = useState(true);
  const [loadingOpenLibrary, setLoadingOpenLibrary] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar libros de Google Books
  useEffect(() => {
    const fetchGoogleData = async () => {
      try {
        const booksData = await fetchGoogleBooks("flowers+inauthor:keyes");
        setGoogleBooks(booksData);
      } catch (error) {
        setError("No se pudieron obtener los libros de Google.");
      } finally {
        setLoadingGoogle(false);
      }
    };

    fetchGoogleData();
  }, []);

  // Cargar libros de Open Library
  useEffect(() => {
    const fetchOpenLibraryData = async () => {
      try {
        const booksData = await fetchOpenLibraryBooks("flowers+inauthor:keyes");
        setOpenLibraryBooks(booksData);
      } catch (error) {
        setError("No se pudieron obtener los libros de Open Library.");
      } finally {
        setLoadingOpenLibrary(false);
      }
    };

    fetchOpenLibraryData();
  }, []);

  return (
    <section>
      <div className="space-y-8">
        {/* Google Books */}
        <BookSection
          title="Libros de Google"
          books={googleBooks}
          loading={loadingGoogle}
          error={error}
        />

        {/* Open Library */}
        <BookSection
          title="Libros de Open Library"
          books={openLibraryBooks}
          loading={loadingOpenLibrary}
          error={error}
        />
      </div>
    </section>
  );
}

export default BookList;
