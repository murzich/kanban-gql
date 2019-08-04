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
    const issueId = 'TEST-123';
    const { getByText } = render(<IssueCard id={issueId} />);

    expect(getByText(issueId)).toBeDefined;
  });

  it('exposes an Issue Summary', () => {
    const issueSummary = 'Test Summary';

    const { getByText } = render(<IssueCard summary={issueSummary} />);

    expect(getByText(issueSummary)).toBeDefined;
  });
});
