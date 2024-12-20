// src/services/googleBooksAPI.ts
import { API_CONFIG } from "../config/apiConfig";

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export const fetchGoogleBooks = async (searchQuery: string): Promise<Book[]> => {
  const { baseURL, apiKey } = API_CONFIG.googleBooks;

  try {
    const response = await fetch(`${baseURL}volumes?q=${searchQuery}&key=${apiKey}`);
    if (!response.ok) throw new Error(`Google Books error: ${response.statusText}`);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching Google Books:", error);
    return [];
  }
};
