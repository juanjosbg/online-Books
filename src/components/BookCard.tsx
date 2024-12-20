// src/components/BookCard.tsx
import React from "react";

interface BookCardProps {
  title: string;
  authors: string[];
  description: string;
  imageUrl?: string;
  source: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  authors,
  imageUrl,
  source,
}) => {
  return (
    <div className="book-card rounded-lg hover:shadow-md hover:pb-4 flex flex-col items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Cover of ${title}`}
          className="w-full h-50 mb-4 object-cover" // Ajuste para que la imagen se recorte correctamente
          loading="lazy"
        />
      ) : (
        <div className="w-24 h-36 mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <h2 className="font-bold text-lg text-center">{title}</h2>
      {{/* <p className="text-sm text-gray-600 text-center">by {authors.join(", ")}</p> */}}
      <span className="text-xs text-blue-500 mt-2 block text-center">Source: {source}</span>
    </div>
  );
};

export default BookCard;
