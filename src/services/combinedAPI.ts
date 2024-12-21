import { fetchOpenLibraryBooks, OpenLibraryBook } from "./openLibraryAPI";

export interface UnifiedBook {
  id: string;
  title: string;
  authors: string[];
  description: string;
  imageUrl?: string;
  source: string;
}

export const fetchCombinedBooks = async (query: string): Promise<UnifiedBook[]> => {
  try {
    const openLibraryBooks = await fetchOpenLibraryBooks(query);

    return openLibraryBooks.map((book) => ({
      id: book.key,
      title: book.title,
      authors: book.author_name || ["Unknown Author"],
      description: `First published in ${book.first_publish_year || "unknown year"}.`,
      imageUrl: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : undefined,
      source: "Open Library",
    }));
  } catch (error) {
    console.error("Error fetching combined books:", error);
    throw error;
  }
};
