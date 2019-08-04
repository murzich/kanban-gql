import { render, cleanup } from '@testing-library/react';
import React from 'react';
import IssueCard from '../IssueCard';

afterEach(cleanup);

describe('IssueCard', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<IssueCard />);

    expect(getByRole('article')).toBeDefined();
  });

  it('exposes an Issue ID', () => {
    const { getByText} = render(<IssueCard />);

    expect(getByText('TEST-123')).toBeDefined;
  })
});
