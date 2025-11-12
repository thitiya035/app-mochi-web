import {
  CardMedia,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Book } from '../../model';
import DeleteIcon from '@mui/icons-material/Delete';

interface BooksTableProps {
  books: Book[];
  onDelete: (id: number) => void;
}

const BooksTable: React.FC<BooksTableProps> = ({ books, onDelete }) => {
  const fallbackImage = './no-img.jpg';

  const handleDelete = (id?: number) => {
    if (id) {
      onDelete(id);
    }
  };

  return (
    <TableContainer>
      {/* sx={{ minWidth: 650 }}  */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="!text-lg !font-semibold">Title</TableCell>
            <TableCell className="!text-lg !font-semibold"></TableCell>
            <TableCell className="!text-lg !font-semibold">Author</TableCell>
            <TableCell className="!text-lg !font-semibold">Year</TableCell>
            <TableCell className="!text-lg !font-semibold">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <CardMedia
                  sx={{ width: 75, height: 99 }}
                  component="img"
                  height="140"
                  image={book.addressImg || fallbackImage}
                  alt="image"
                />
              </TableCell>
              {/*  vertical-align: top; */}
              <TableCell className="!align-top">
                <div>{book.title}</div>
                <div className="text-gray-chateau-800 text-sm">
                  {book.author}
                </div>
              </TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.publicationYear}</TableCell>
              <TableCell>
                <IconButton
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '50%',
                    padding: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                  onClick={() => handleDelete(book.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BooksTable;
