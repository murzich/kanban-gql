import { render } from '@testing-library/react';
import React from 'react';
import IssueCard from '../IssueCard';

describe('IssueCard', () => {
  it('should be rendered', () => {
    const { getByTestId } = render(<IssueCard />);

    expect(getByTestId('issueCard')).toBeDefined();
  });
});
