import { Book, toggleViewBook } from '../../model';
import { SelectViewList } from '../../ui/select-view-list';
import BookCard from '../../ui/book-card/book-card';
import BooksTable from '../../ui/books-table/books-table';
import { useState } from 'react';

interface TableMyBooksProps {
  books: Book[];
  onDelete: (id: number) => void;
}

const MyBookList: React.FC<TableMyBooksProps> = ({ books, onDelete }) => {
  const [selectedView, setSelectedView] = useState('module');

  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    newView: toggleViewBook
  ) => {
    setSelectedView(newView);
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="action-btn flex justify-end">
        <SelectViewList view={selectedView} onViewChange={handleViewChange} />
      </section>

      <div className="list-book grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 justify-items-center">
        {selectedView === 'module' &&
          books.map((book, _index) => (
            <BookCard key={book.id} book={book} onDelete={onDelete} />
          ))}
      </div>

      <div>
        {selectedView === 'list' && (
          <BooksTable books={books} onDelete={onDelete} />
        )}
      </div>
    </div>
  );
};

export default MyBookList;
