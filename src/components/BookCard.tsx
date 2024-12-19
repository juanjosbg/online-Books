// src/components/BookCard.tsx
import React from "react";

interface BookCardProps {
  title: string;
  authors: string[];
  imageUrl: string;
  source: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, imageUrl, source }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden hover:shadow-2xl border bg-[#fff]">
      <div className="py-3 px-3">
        <img className="h-56 w-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg lg:text-xl text-gray-900 uppercase">{title}</h3>
        <p className="text-gray-700 text-sm">{authors?.join(", ") || "Autor desconocido"}</p>
        <div className="p-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            Ver más
          </button>
        </div>
        <small>{source}</small>
      </div>
    </div>
  );
};

export default BookCard;
