import React from "react";
import useBooks from "../hooks/useBooks";
import BookCard from "../components/BookCard";

const Home: React.FC = () => {
  const { books, loading, error } = useBooks("flowers inauthor:keyes");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          authors={book.authors}
          description={book.description}
          imageUrl={book.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
