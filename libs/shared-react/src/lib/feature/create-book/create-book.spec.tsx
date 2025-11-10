import { render } from '@testing-library/react';

import CreateBook from './create-book';

describe('CreateBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateBook />);
    expect(baseElement).toBeTruthy();
  });
});
