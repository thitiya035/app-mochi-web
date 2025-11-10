import {
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Book } from '../../model';

interface BooksTableProps {
  books: Book[];
}

const BooksTable: React.FC<BooksTableProps> = ({ books }) => {
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
                  image={book.addressImg}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BooksTable;
