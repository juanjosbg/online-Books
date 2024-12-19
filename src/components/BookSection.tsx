import React from "react";
import BookCard from "./BookCard";

interface BookSectionProps {
  title: string;
  books: any[];
  loading: boolean;
  error: string | null;
}

const BookSection: React.FC<BookSectionProps> = ({ title, books, loading, error }) => {
  if (loading) {
    return <div className="text-center text-gray-500">Cargando libros...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-center font-bold text-2xl">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {books.map((book: any) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo?.title || book.title}
            authors={book.volumeInfo?.authors || book.authors || []}
            imageUrl="https://via.placeholder.com/300x200" // Placeholder image
            source={book.source || "Desconocido"}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSection;
