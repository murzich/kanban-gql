import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading', () => {
  it('should be rendered', () => {
    const { getByLabelText } = render(<Loading />);

    expect(getByLabelText('Loading…')).toBeDefined();
  });
});
