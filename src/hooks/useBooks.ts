import { useState, useEffect } from "react";
import { fetchCombinedBooks } from "../services/combinedAPI";
import { UnifiedBook } from "../interfaces/Book";

const useBooks = (query: string) => {
  const [books, setBooks] = useState<UnifiedBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const result = await fetchCombinedBooks(query);
        setBooks(result);
      } catch (err) {
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };
    
    getBooks();
  }, [query]);

  return { books, loading, error };
};

export default useBooks;
