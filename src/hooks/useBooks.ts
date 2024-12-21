import { useState, useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "../config/apiConfig";

const useBooks = (query: string) => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFromGoogleBooks = async () => {
      try {
        const response = await axios.get(
          `${API_CONFIG.googleBooks.baseURL}?q=${query}&key=${API_CONFIG.googleBooks.apiKey}`
        );
        return response.data.items?.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || [],
          description: item.volumeInfo.description || "No description available.",
          imageUrl: item.volumeInfo.imageLinks?.thumbnail || null,
        })) || [];
      } catch {
        throw new Error("Google Books API failed.");
      }
    };

    const fetchFromOpenLibrary = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.openLibrary.baseURL}/search.json?q=${query}`);
        return response.data.docs?.map((doc: any) => ({
          id: doc.key,
          title: doc.title,
          authors: doc.author_name || [],
          description: "No description available.",
          imageUrl: `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` || null,
        })) || [];
      } catch {
        throw new Error("Open Library API failed.");
      }
    };

    const fetchFromBookAPI = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.bookAPI.baseURL}?search=${query}`);
        return response.data.results?.map((book: any) => ({
          id: book.id,
          title: book.title,
          authors: book.authors || [],
          description: book.description || "No description available.",
          imageUrl: book.imageUrl || null,
        })) || [];
      } catch {
        throw new Error("Book API failed.");
      }
    };

    const fetchFromBookFinder = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.bookFinder.baseURL}?query=${query}`);
        return response.data.books?.map((book: any) => ({
          id: book.id,
          title: book.title,
          authors: book.authors || [],
          description: book.description || "No description available.",
          imageUrl: book.imageUrl || null,
        })) || [];
      } catch {
        throw new Error("Book Finder API failed.");
      }
    };

    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await Promise.allSettled([
          fetchFromGoogleBooks(),
          fetchFromOpenLibrary(),
          fetchFromBookAPI(),
          fetchFromBookFinder(),
        ]);

        const booksFromAllApis = results
          .filter((result) => result.status === "fulfilled") // Filtrar resultados exitosos
          .flatMap((result: any) => result.value); // Combinar resultados de todas las APIs

        setBooks(booksFromAllApis);
      } catch (error) {
        setError("Failed to fetch books from one or more APIs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return { books, loading, error };
};

export default useBooks;
