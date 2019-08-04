import { render } from '@testing-library/react';
import React from 'react';
import IssueCard from '../IssueCard';

describe('IssueCard', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<IssueCard />);

    expect(getByRole('article')).toBeDefined();
  });
});
