import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Book } from '../../model';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface CreateBookProps {
  open: boolean;
  onClose: () => void;
  onCreate: (bookData: Book) => void;
}

const CreateBook: React.FC<CreateBookProps> = ({ open, onClose, onCreate }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationYear, setPublicationYear] = useState<number | null>(null);
  const [description, setDescription] = useState('');
  const [addressImg, setAddressImg] = useState('');

  const handleCreateBook = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title) newErrors.title = 'กรุณากรอกชื่อหนังสือ';
    if (!author) newErrors.author = 'กรุณากรอกชื่อผู้เขียน';
    if (!genre) newErrors.genre = 'กรุณากรอกประเภทหนังสือ';
    if (!publicationYear) newErrors.publicationYear = 'กรุณากรอกปีที่เผยแพร่';

    if (Object.keys(newErrors).length > 0 || !publicationYear) {
      setErrors(newErrors);
      return;
    }

    const bookForm: Book = {
      title,
      author,
      genre,
      publicationYear,
      description,
      addressImg,
    };

    onCreate(bookForm);
    closeDialog();
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublicationYear(null);
    setDescription('');
    setAddressImg('');
  };

  const closeDialog = () => {
    resetForm();
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="bg-blue-700 text-white">Create Book</DialogTitle>
      <DialogContent className="!pt-4">
        {/* Wrap Grid in container to support 'item' */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="ชื่อหนังสือ"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="!mb-4"
              error={!!errors.title}
              helperText={errors.title}
            />
          </Grid>
          {/* <Grid size={{ xs: 12}}> */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="ผู้เขียน"
              variant="outlined"
              fullWidth
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="!mb-4"
              error={!!errors.author}
              helperText={errors.author}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="ประเภทหนังสือ"
              variant="outlined"
              fullWidth
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="!mb-4"
              error={!!errors.genre}
              helperText={errors.genre}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="ปีที่เผยแพร่"
                sx={{
                  '& .MuiPickersOutlinedInput-root': {
                    borderColor: errors.publicationYear ? 'red' : 'inherit', // เปลี่ยนสีกรอบเมื่อมี error
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: errors.publicationYear ? 'red' : 'inherit', // เปลี่ยนสีกรอบเมื่อมี error
                  },
                }}
                value={publicationYear ? new Date(publicationYear, 0) : null}
                onChange={(newValue) =>
                  setPublicationYear(newValue?.getFullYear() ?? null)
                }
                views={['year']}
              />
            </LocalizationProvider>

            {errors.publicationYear && (
              <Typography variant="body2" color="error" className="ml-1">
                {errors.publicationYear}
              </Typography>
            )}
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="รายละเอียดเรื่องย่อ"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="!mb-4"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="URL Image"
              variant="outlined"
              fullWidth
              value={addressImg}
              onChange={(e) => setAddressImg(e.target.value)}
              className="!mb-4"
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={closeDialog} color="primary">
          Close
        </Button>
        <Button
          onClick={handleCreateBook}
          color="primary"
          className="!bg-blue-600 !text-white !justify-items-end"
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateBook;
