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

  test('should display passed Issue cards', () => {
    const mockedIssues = [
      { id: 1, summary: 'test summary', description: 'test description' },
    ];
    const { getByRole } = render(
      <ColumnItem title="Test column">
        <IssueList issues={mockedIssues} />
      </ColumnItem>,
    );

    expect(getByRole('article')).toBeDefined();
  });
});
