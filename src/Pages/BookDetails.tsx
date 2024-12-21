import React from "react";

interface BookDetailsProps {
  book: {
    title: string;
    authors: string[];
    description: string;
    imageUrl?: string;
  };
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  if (!book) {
    return <div>No book selected</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <img
          src={book.imageUrl || "https://via.placeholder.com/150?text=No+Image"}
          alt={book.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
          <p className="text-gray-700 mb-4">By: {book.authors.join(", ")}</p>
          <p className="text-gray-600">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
