import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import MyBookList from '../my-book-list/my-book-list';
import { getBooks } from '../../data-access/books';
import { Book } from '../../model';
import CreateBook from '../create-book/create-book';

export function BookCollection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [open, setOpen] = useState(false);

  // const toggleCrateBookDialog = (value: boolean):void => {
  //   setOpen(value);
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const originalBooks = await getBooks();

        const books = originalBooks.map((b) => {
          const { addressImg: idURL, ...book } = b;
          const addressImg = `https://lh3.googleusercontent.com/d/${idURL}`;

          return { ...book, addressImg };
        });

        setBooks(books);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Box className="p-4 flex flex-row-reverse">
        <Button
          className="!bg-blue-600 !text-white !justify-items-end"
          variant="contained"
          onClick={handleClickOpen}
        >
          Add book
        </Button>

        <CreateBook
          open={open}
          onClose={handleClose}
          // onCreate={handleCreateBook}
        />
      </Box>

      <Box className="p-10 ">
        <MyBookList books={books} />
      </Box>
    </div>
  );
}

export default BookCollection;
