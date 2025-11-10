import { render } from '@testing-library/react';

import BookCollection from './book-collection';

describe('BookCollection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookCollection />);
    expect(baseElement).toBeTruthy();
  });
});
