import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Loading from '../Loading';

describe('Loading', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<Loading />);

    expect(getByRole('figure')).toHaveAttribute('aria-label', 'Loading…');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Loading />);

    expect(asFragment()).toMatchSnapshot();
  });
});
