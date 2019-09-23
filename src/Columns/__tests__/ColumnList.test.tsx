import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ColumnList from '../ColumnList';
import ColumnItem from '../ColumnItem';

describe('ColumnList', () => {
  afterEach(cleanup);

  test('should be empty without columns', () => {
    const { getByRole } = render(<ColumnList />);

    expect(getByRole('list')).toBeEmpty();
  });

  test('should display child columns', () => {
    const { getByRole } = render(
      <ColumnList>
        <ColumnItem title="Test-1"></ColumnItem>
        <ColumnItem title="TEST-2"></ColumnItem>
      </ColumnList>,
    );

    expect(getByRole('list').childElementCount).toBe(2);
  });
});
