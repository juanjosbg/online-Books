import React from "react";

interface SearchResultsProps {
  results: Array<{
    volumeInfo?: {
      title?: string;
      authors?: string[];
      imageLinks?: {
        thumbnail?: string;
      };
    };
    title?: string;
    author_name?: string[];
    cover_i?: string;
  }>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {results.map((result, index) => {
        const title = result.volumeInfo?.title || result.title || "Untitled";
        const authors =
          result.volumeInfo?.authors?.join(", ") ||
          result.author_name?.join(", ") ||
          "Unknown Author";
        const image =
          result.volumeInfo?.imageLinks?.thumbnail ||
          (result.cover_i
            ? `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`
            : "https://via.placeholder.com/150?text=No+Image");

        return (
          <div
            key={index}
            className="bg-greenCont2 p-2 rounded-md flex flex-col items-center"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-72 object-cover mb-4 hover:shadow"
            />
            <h3 className="font-bold uppercase text-center text-lg">{title}</h3>
            <p className="text-sm text-gray-600 text-center pb-3">{authors}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
