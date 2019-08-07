import { render } from '@testing-library/react';
import React from 'react';
import IssueListContainer from '../IssueListContainer';

describe('IssueListContainer', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<IssueListContainer />);

    expect(getByRole('list')).toBeDefined();
  });
});
