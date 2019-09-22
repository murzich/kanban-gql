import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import NewIssueForm from '../NewIssueForm';

afterEach(cleanup);

describe('New Issue Form', () => {
  test('should contain summary & description inputs', () => {
    const inputNames = [/summary/i, /description/i];
    expect.assertions(inputNames.length);

    const { getByLabelText } = render(<NewIssueForm />);

    inputNames.forEach(id =>
      expect(getByLabelText(id, { selector: 'input, textarea' })).toBeDefined(),
    );
  });

  test('should contain submit button', () => {
    const { getByText } = render(<NewIssueForm />);

    // .closest added to select button Element even if it contain another elements inside
    expect(getByText(/create/i).closest('button')).toHaveAttribute(
      'type',
      'submit',
    );
  });
});
