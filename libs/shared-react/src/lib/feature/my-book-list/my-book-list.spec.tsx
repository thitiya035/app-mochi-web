import { render } from '@testing-library/react';

import MyBookList from './my-book-list';

describe('MyBookList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyBookList />);
    expect(baseElement).toBeTruthy();
  });
});
