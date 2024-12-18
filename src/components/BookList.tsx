import React, { useEffect, useState } from "react";
import { fetchBooks, Book } from "../services/API";

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
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (loading) {
    return <div className="text-center text-gray-500">Cargando libros...</div>;
  }

  const displayedBooks = books.slice(3, 10);

  return (
    <section className="bg-[#191919c1]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-[#1c1c1c63] py-10 px-6">
        {displayedBooks.map((book) => (
          <div key={book.id}
            className="max-w-sm rounded-lg overflow-hidden hover:shadow-2xl border bg-[#fff]"
          >
            <div className="py-3 px-3">
              <img className="h-56 w-full object-cover"
                src={ book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/300x200" }
                alt={book.volumeInfo.title}
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-bold text-lg lg:text-xl text-gray-900 uppercase">
                {book.volumeInfo.title}
              </h3>
              <p className="text-gray-700 text-sm">
                {book.volumeInfo.authors?.join(", ") || "Autor desconocido"}
              </p>

              <div className="p-4 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookList;
