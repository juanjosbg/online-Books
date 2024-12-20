// src/services/combinedAPI.ts
import { fetchGoogleBooks, Book } from './googleBooksAPI';
import { fetchOpenLibraryBooks, OpenLibraryBook } from './openLibraryAPI';

export interface UnifiedBook {
  id: string; // ID único
  title: string;
  authors: string[];
  description: string;
  imageUrl?: string; // La URL de la imagen, si está disponible
  source: "GoogleBooks" | "OpenLibrary"; // Identifica de dónde proviene el libro
}

export const fetchCombinedBooks = async (searchQuery: string): Promise<UnifiedBook[]> => {
  try {
    const [googleBooks, openLibraryBooks] = await Promise.all([
      fetchGoogleBooks(searchQuery),
      fetchOpenLibraryBooks(searchQuery),
    ]);

    // Unificar resultados en un formato común
    const unifiedBooks: UnifiedBook[] = [
      ...googleBooks.map((book) => ({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || [],
        description: book.volumeInfo.description || "No description available.",
        imageUrl: book.volumeInfo.imageLinks?.thumbnail || null, // Si tiene imagen
        source: "GoogleBooks",
      })),
      ...openLibraryBooks.map((book) => ({
        id: book.key,
        title: book.title,
        authors: book.authors?.map((author) => author.name) || [],
        description: book.description || "No description available.",
        imageUrl: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : null, // Si no tiene imagen, se pone null
        source: "OpenLibrary",
      })),
    ];

    return unifiedBooks;
  } catch (error) {
    console.error("Error fetching combined books:", error);
    return [];
  }
};
