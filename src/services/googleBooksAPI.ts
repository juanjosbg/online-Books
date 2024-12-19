// src/services/googleBooksAPI.ts
export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
  };
}

export const fetchGoogleBooks = async (searchQuery: string): Promise<Book[]> => {
  const API_URL = import.meta.env.VITE_GOOGLE_BOOKS_API_URL;
  const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  try {
    const response = await fetch(
      `${API_URL}volumes?q=${searchQuery}&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books from Google Books:", error);
    return [];
  }
};
