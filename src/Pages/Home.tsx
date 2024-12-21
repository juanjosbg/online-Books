// src/Pages/Home.tsx
import React, { useState } from "react";
import useBooks from "../hooks/useBooks";
import BookCard from "../components/BookCard";
import { ImagePlaceholderSkeleton } from "../components/ImagePlaceholderSkeleton";
import { DefaultPagination } from "../utils/Pagination"; 

const Home: React.FC<{ selectedGenre?: string }> = ({ selectedGenre }) => {
  const { books, loading, error } = useBooks(selectedGenre);
  const [activePage, setActivePage] = useState(1);
  const booksPerPage = 8;

  if (loading) return <ImagePlaceholderSkeleton />;
  if (error) return <p>{error}</p>;

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  // Determina los libros que se deben mostrar en la página actual
  const startIndex = (activePage - 1) * booksPerPage;
  const currentBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            imageUrl={book.imageUrl}
          />
        ))}
      </div>

      {/* Agrega la paginación */}
      <DefaultPagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
