// src/components/BookList.tsx
import React, { useEffect, useState } from 'react';
import { fetchBooks, Book } from '../services/API';

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const booksData = await fetchBooks("flowers+inauthor:keyes");
        setBooks(booksData);
      } catch (error) {
        setError("No se pudieron obtener los libros.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, []);
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Cargando libros...</div>;
  }

  return (
    <section>
      <h1>Lista de Libros</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || '/default-image.jpg'}
              alt={book.volumeInfo.title}
              className="book-image"
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ") || "Autor desconocido"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookList;
