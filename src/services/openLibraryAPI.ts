// src/services/openLibraryAPI.ts
import { API_CONFIG } from "../config/apiConfig";

export interface OpenLibraryBook {
  key: string;
  title: string;
  authors?: { name: string }[];
  description?: string;
  cover_i?: number;
}

export const fetchOpenLibraryBooks = async (searchQuery: string): Promise<OpenLibraryBook[]> => {
  const { baseURL } = API_CONFIG.openLibrary;

  try {
    const response = await fetch(`${baseURL}search.json?q=${encodeURIComponent(searchQuery)}`);
    if (!response.ok) throw new Error(`Open Library error: ${response.statusText}`);
    const data = await response.json();
    return data.docs.map((book: any) => ({
      key: book.key,
      title: book.title,
      authors: book.author_name?.map((name: string) => ({ name })),
      description: book.first_sentence?.value || "No description available.",
      cover_i: book.cover_i,
    }));
  } catch (error) {
    console.error("Error fetching Open Library books:", error);
    return [];
  }
};
