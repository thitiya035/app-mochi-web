import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Alert,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import MyBookList from '../my-book-list/my-book-list';
import { createBook, deleteBook, getBooks } from '../../data-access/books';
import { Book } from '../../model';
import CreateBook from '../create-book/create-book';

function extractFileId(url: string): string | undefined {
  const regex = /\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);

  return match ? match[1] : undefined;
}

export function BookCollection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    severity: 'success' | 'error' | null;
  }>({
    message: '',
    severity: null,
  });

  const [openAlert, setOpenAlert] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteBookId, setDeleteBookId] = useState<number | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateBook = async (bookForm: Book) => {
    try {
      const { addressImg, ...value } = bookForm;
      const params: Book = {
        ...value,
        addressImg: addressImg ? extractFileId(addressImg) : undefined,
      };

      await createBook(params);

      const updatedBooks = await getBooks();
      const books = updatedBooks.map((b) => {
        const { addressImg: idURL, ...book } = b;

        const addressImg = `https://lh3.googleusercontent.com/d/${idURL}`;

        return { ...book, addressImg: idURL ? addressImg : undefined };
      });

      setBooks(books);
      setOpen(false);

      setAlert({
        message: 'Book created successfully!',
        severity: 'success',
      });

      setOpenAlert(true);
    } catch (error) {
      console.error('Error creating book:', error);

      setAlert({
        message: 'Failed to create the book. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleDelete = async () => {
    if (deleteBookId !== null) {
      try {
        await deleteBook(deleteBookId);
        const updatedBooks = await getBooks();

        setBooks(updatedBooks);
        setAlert({
          message: 'Book deleted successfully!',
          severity: 'success',
        });
        setOpenAlert(true);
      } catch (error) {
        console.error('Error deleting book:', error);
        setAlert({
          message: 'Failed to delete the book. Please try again.',
          severity: 'error',
        });
        setOpenAlert(true);
      } finally {
        setOpenDeleteDialog(false);
        setDeleteBookId(null);
      }
    }
  };

  const handleOpenDeleteDialog = (bookId: number) => {
    setDeleteBookId(bookId);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteBookId(null);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const originalBooks = await getBooks();

        const books = originalBooks.map((b) => {
          const { addressImg: idURL, ...book } = b;
          const addressImg = `https://lh3.googleusercontent.com/d/${idURL}`;

          return { ...book, addressImg: idURL ? addressImg : undefined };
        });
        console.log({ books });
        setBooks(books);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Box className="p-4 flex justify-between items-center">
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 20, sm: 24, md: 30 },
            paddingLeft: { xs: 0, sm: 5 },
            paddingTop: { xs: 1, sm: 5 },
          }}
        >
          ชั้นวางหนังสือของคุณ
        </Typography>

        <Button
          className="!bg-blue-600 !text-white !py-2 !px-4 !text-lg !rounded-md"
          variant="contained"
          onClick={handleClickOpen}
        >
          <span className="hidden sm:block">Add Book</span>
          <span className="sm:hidden z-10">+</span>
        </Button>
      </Box>

      <CreateBook
        open={open}
        onClose={handleClose}
        onCreate={handleCreateBook}
      />

      <Box className="p-[30px]">
        <MyBookList books={books} onDelete={handleOpenDeleteDialog} />
      </Box>

      {alert.severity !== null && (
        <Snackbar
          open={openAlert}
          autoHideDuration={5000}
          onClose={() => {
            setOpenAlert(false),
              setAlert({
                message: '',
                severity: null,
              });
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Alert variant="filled" severity={alert.severity} className="m-4">
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      {/* Dialog สำหรับยืนยันการลบ */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>ยืนยันลบหนังสือ</DialogTitle>
        <DialogContent>
          <Typography>คุณต้องการลบหนังสือ หรือไม่?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDeleteDialog}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            className="!bg-red-600 !text-white !justify-items-end"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BookCollection;
