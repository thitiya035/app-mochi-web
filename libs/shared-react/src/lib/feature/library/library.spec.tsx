import { render } from '@testing-library/react';

import Library from './library';

describe('Library', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library />);
    expect(baseElement).toBeTruthy();
  });
});
