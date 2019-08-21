import { cleanup, render } from '@testing-library/react';
import React from 'react';
import IssueList from '../../Issue/IssueList';
import ColumnItem from '../ColumnItem';

describe('ColumnItem', () => {
  afterEach(cleanup);
  test('should has title', () => {
    const stubTitle = 'Column title';

    const { getByText } = render(<ColumnItem title={stubTitle} />);

    expect(getByText(stubTitle)).toBeDefined();
  });

  test('should display passed Issue cards list as children', () => {
    const mockedIssues = [
      {
        id: 'TEST-1',
        summary: 'test summary',
        description: 'test description',
      },
      {
        id: 'TEST-2',
        summary: 'test summary',
        description: 'test description',
      },
      {
        id: 'TEST-3',
        summary: 'test summary',
        description: 'test description',
      },
    ];
    const { getAllByRole } = render(
      <ColumnItem title="Test column">
        <IssueList issues={mockedIssues} />
      </ColumnItem>,
    );

    expect(getAllByRole('article')).toHaveLength(mockedIssues.length);
  });
});
