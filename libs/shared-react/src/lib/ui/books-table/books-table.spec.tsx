import { render } from '@testing-library/react';

import BooksTable from './books-table';

describe('BooksTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BooksTable />);
    expect(baseElement).toBeTruthy();
  });
});
