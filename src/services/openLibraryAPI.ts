// src/services/openLibraryAPI.ts
export interface OpenLibraryBook {
  key: string;
  title: string;
  authors?: { name: string }[];
  description?: string;
}

export const fetchOpenLibraryBooks = async (searchQuery: string): Promise<OpenLibraryBook[]> => {
  const API_URL = import.meta.env.VITE_OPEN_LIBRARY_API_URL;

  try {
    const response = await fetch(`${API_URL}search.json?q=${encodeURIComponent(searchQuery)}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs.map((book: any) => ({
      key: book.key,
      title: book.title,
      authors: book.author_name?.map((name: string) => ({ name })),
      description: book.first_sentence?.value || "No description available.",
    }));
  } catch (error) {
    console.error("Error fetching books from Open Library:", error);
    return [];
  }
};
