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
