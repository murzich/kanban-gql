import { render } from '@testing-library/react';
import React from 'react';
import ColumnItem from '../ColumnItem';

describe('ColumnItem', () => {
  test('should has title', () => {
    const stubTitle = 'Column title';

    const { getByText } = render(<ColumnItem title={stubTitle} />);

    expect(getByText(stubTitle)).toBeDefined();
  });
});
