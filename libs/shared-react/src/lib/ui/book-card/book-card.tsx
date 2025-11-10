import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Book } from '../../model';

interface BookCardProps {
  book: Book;
}

// export function BookCard() {
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card sx={{ width: 160, height: 280, backgroundColor: '#e7e7e7' }}>
      <CardActionArea>
        {/* image="../src/assets/img/had.jpg" */}
        {/* image="{book}" */}
        <CardMedia
          sx={{ widows: 123, height: 170 }}
          component="img"
          height="140"
          image={book.addressImg}
          alt="image"
        />
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
      </CardActionArea>
    </Card>
  );
};
// }

export default BookCard;
