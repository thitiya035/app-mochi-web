import axios from 'axios';
import { Book } from '../model/book';
const url = 'http://localhost:8080/api/books';

export const getBooks = async (): Promise<Book[]> => {
  try {
    const { data: books } = await axios.get<Book[]>(url);

    return books;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createBook = async (bookData: Book) => {
  try {
    const response = await axios.post(url, bookData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteBook = async (id: number) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
