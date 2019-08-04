import { cleanup, render } from '@testing-library/react';
import React from 'react';
import IssueList from '../IssueList';

afterEach(cleanup);

describe('IssueList', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<IssueList />);

    expect(getByRole('list')).toBeDefined();
  });

  it('displays passed Issue items data', () => {
    const issues = [
      {
        id: 'TEST-1',
        summary: 'Test summary 1',
        description: 'Test issue description 1',
      },
      {
        id: 'TEST-2',
        summary: 'Test summary 2',
        description: 'Test issue description 2',
      },
      {
        id: 'TEST-3',
        summary: 'Test summary 3',
        description: 'Test issue description 3',
      },
      {
        id: 'TEST-4',
        summary: 'Test summary 4',
        description: 'Test issue description 4',
      },
    ];

    const { getByText } = render(<IssueList issues={issues} />);

    issues.forEach((issue) => {
      Object.values(issue).map((text) => {
        expect(getByText(text)).toBeDefined();
      })
    })
  });
});
