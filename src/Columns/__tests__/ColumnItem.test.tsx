import { render } from '@testing-library/react';
import React from 'react';
import ColumnItem from '../ColumnItem';

describe('ColumnItem', () => {
  test('should has title', () => {
    const { getByText } = render(<ColumnItem />);

    expect(getByText('Column title')).toBeDefined();
  });
});
