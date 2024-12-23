import React from "react";

interface BookCardProps {
  title: string;
  authors: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  title,
  authors,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-3 bg-white rounded-lg shadow-md hover:shadow-lg"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2 text-center">{title}</h2>
      <p className="text-sm text-gray-600 text-center">{authors}</p>
      <p className="text-sm text-gray-800 mt-2 text-center">{description}</p>
    </div>
  );
};
