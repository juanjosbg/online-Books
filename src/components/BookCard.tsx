import React from "react";

interface BookCardProps {
  title: string;
  authors: string[];
  description: string;
  imageUrl?: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">By: {authors.join(", ")}</p>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
