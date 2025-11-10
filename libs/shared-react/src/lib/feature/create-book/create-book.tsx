import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';

interface CreateBookProps {
  open: boolean;
  onClose: () => void;
  // onCreate: (title: string, author: string) => void;
}

const CreateBook: React.FC<CreateBookProps> = ({ open, onClose }) => {
  const [bookName, setBookName] = useState('');
  const [bookDetail, setBookDetail] = useState('');

  const handleCreateBook = () => {
    if (bookName && bookDetail) {
      // onCreate(bookName, bookDetail);
      setBookName('');
      setBookDetail('');
      onClose();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="bg-blue-700 text-white">Create Book</DialogTitle>
      <DialogContent className="!pt-4 w-[100%] ">
        <TextField
          type="text"
          label="Book Name"
          variant="outlined"
          fullWidth
          className="!mb-4 "
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />

        <TextField
          margin="dense"
          id="author"
          label="Author"
          type="text"
          variant="outlined"
          multiline
          fullWidth
          rows={4}
          value={bookDetail}
          onChange={(e) => setBookDetail(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>

        {/* onClick={handleCreateBook} */}
        <Button color="primary">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateBook;
