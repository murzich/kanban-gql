import React from 'react';
import { render, cleanup } from '@testing-library/react';
import IssueList from '../IssueList';

afterEach(cleanup);

describe('IssueList', () => {
  it('be rendered', () => {
    const { getByRole } = render(<IssueList />);

    expect(getByRole('list')).toBeDefined();
  });
});
