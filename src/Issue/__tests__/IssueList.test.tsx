import { cleanup, render } from '@testing-library/react';
import React from 'react';
import IssueList from '../IssueList';

afterEach(cleanup);

describe('IssueList', () => {
  it('be rendered', () => {
    const { getByRole } = render(<IssueList />);

    expect(getByRole('list')).toBeDefined();
  });
});
