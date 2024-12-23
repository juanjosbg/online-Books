import React, { useState } from "react";
import useBooks from "../hooks/useBooks";
import { BookCard } from "../components/BookCard"; // Import como named export
import { ImagePlaceholderSkeleton } from "../components/ImagePlaceholderSkeleton";
import { DefaultPagination } from "../utils/Pagination";

const Home: React.FC<{ selectedGenre?: string }> = ({ selectedGenre }) => {
  const { books, loading, error } = useBooks(selectedGenre);
  const [activePage, setActivePage] = useState(1);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const booksPerPage = 8;

  if (loading) return <ImagePlaceholderSkeleton />;
  if (error) return <p>{error}</p>;

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  const startIndex = (activePage - 1) * booksPerPage;
  const currentBooks = books.slice(startIndex, startIndex + booksPerPage);

  const handleBookClick = (book: any) => {
    setSelectedBook(book);
  };

  const handleBackToList = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      {selectedBook ? (
        <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-md">
          <button
            onClick={handleBackToList}
            className="mb-4 text-blue-600 hover:underline"
          >
            Volver a la lista
          </button>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={selectedBook.imageUrl}
                alt={selectedBook.title}
                className="w-full md:w-52 rounded-md"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold uppercase">{selectedBook.title}</h1>
              <p className="text-gray-600">{selectedBook.authors}</p>
              <p className="mt-4 text-gray-800">{selectedBook.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentBooks.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                imageUrl={book.imageUrl}
                onClick={() => handleBookClick(book)}
              />
            ))}
          </div>
          <DefaultPagination
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
