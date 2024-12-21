export const API_CONFIG = {
  googleBooks: {
    baseURL: import.meta.env.VITE_GOOGLE_BOOKS_API_URL,
    apiKey: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
  },
  openLibrary: {
    baseURL: import.meta.env.VITE_OPEN_LIBRARY_API_URL,
  },
  bookAPI: {
    baseURL: import.meta.env.VITE_BOOK_API_URL,
  },
  bookFinder: {
    baseURL: import.meta.env.VITE_BOOKFINDER_API,
  },
};
