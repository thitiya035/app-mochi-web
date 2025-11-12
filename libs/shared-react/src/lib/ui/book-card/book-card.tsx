import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { Book } from '../../model';

interface BookCardProps {
  book: Book;
  onDelete: (id: number) => void;
}

// export function BookCard() {
const BookCard: React.FC<BookCardProps> = ({ book, onDelete }) => {
  const fallbackImage = '../no-img.jpg';

  const handleDelete = () => {
    const id = book.id;

    if (id) {
      onDelete(id);
    }
  };

  return (
    <Card sx={{ width: 160, height: 280, backgroundColor: '#e7e7e7' }}>
      <CardActionArea>
        <CardMedia
          sx={{ widows: 123, height: 170 }}
          component="img"
          height="140"
          image={book.addressImg || fallbackImage}
          alt="image"
        />
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // เพิ่มพื้นหลังโปร่งใสให้ไอคอน
            borderRadius: '50%',
            padding: '8px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </CardActionArea>

      <CardContent className="text-black ">
        <Typography component="div">
          <Box sx={{ fontSize: 14, fontWeight: 'normal', height: 50 }}>
            {book.title}
          </Box>
          <Box
            sx={{
              fontSize: 10,
              color: 'text.secondary',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {book.description}
          </Box>
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
};
// }

export default BookCard;
