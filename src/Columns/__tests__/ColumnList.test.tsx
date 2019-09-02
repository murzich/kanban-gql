import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ColumnList from '../ColumnList';

describe('ColumnList', () => {
  afterEach(cleanup);

  test('should be empty without columns', () => {
    const { getByRole } = render(<ColumnList />);

    expect(getByRole('list')).toBeEmpty();
  });
});
