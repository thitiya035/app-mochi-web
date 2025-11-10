import { render } from '@testing-library/react';

import SelectViewList from './select-view-list';

describe('SelectViewList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectViewList />);
    expect(baseElement).toBeTruthy();
  });
});
