// src/components/BookList.tsx
import React, { useEffect, useState } from "react";
import { fetchCombinedBooks, UnifiedBook } from "../services/combinedAPI";
import BookCard from "./BookCard";

const BookList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<UnifiedBook[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const combinedBooks = await fetchCombinedBooks("flowers+inauthor:keyes");

        // Seleccionamos 15 libros aleatorios para mostrar cada vez
        const randomBooks = getRandomBooks(combinedBooks, 15);
        setBooks(randomBooks);
      } catch (error) {
        setError("Error fetching books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); // Se ejecuta solo cuando el componente se monta (recarga de página)

  // Función para obtener n libros aleatorios
  const getRandomBooks = (books: UnifiedBook[], count: number): UnifiedBook[] => {
    const shuffledBooks = books.sort(() => 0.5 - Math.random());
    return shuffledBooks.slice(0, count);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          authors={book.authors}
          description={book.description}
          imageUrl={book.imageUrl || undefined}
          source={book.source}
        />
      ))}
    </div>
  );
};

export default BookList;
