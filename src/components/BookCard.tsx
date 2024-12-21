import React from "react";

interface BookCardProps {
  title: string;
  authors: string[];
  description: string;
  imageUrl: string | null;
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, imageUrl }) => {
  return (
    <div className="bg-greenCont2 p-2 rounded-md">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-80 object-cover mb-4 hover:shadow"/>}
      <h2 className="font-bold uppercase text-center text-xl">{title}</h2>
      <p className="text-sm text-gray-600 text-center pb-3">By: {authors.join(", ")}</p>
    </div>
  );
};

export default BookCard;
