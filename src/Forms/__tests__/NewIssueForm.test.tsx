import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import NewIssueForm from '../NewIssueForm';

afterEach(cleanup);

describe('New Issue Form', () => {
  test('should contain summary & description inputs', () => {
    const inputNames = [/summary/i, /description/i];
    expect.assertions(inputNames.length);

    const { getByLabelText } = render(<NewIssueForm onSubmit={() => {}} />);

    inputNames.forEach(id =>
      expect(getByLabelText(id, { selector: 'input, textarea' })).toBeDefined(),
    );
  });

  test('should contain submit button', () => {
    const { getByText } = render(<NewIssueForm onSubmit={() => {}} />);

    // .closest added to select button Element even if it contain another elements inside
    expect(getByText(/create/i).closest('button')).toHaveAttribute(
      'type',
      'submit',
    );
  });

  test('should call onSubmit callback on button click', () => {
    const onSubmitMock = jest.fn();
    const { getByText } = render(<NewIssueForm onSubmit={onSubmitMock} />);

    fireEvent.click(getByText(/create/i).closest('button') || document);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  test('should submit typed values from inputs', () => {
    const onSubmitMock = jest.fn();
    const stubValues = [
      { label: /summary/i, value: 'testSummary', name: 'summary' },
      {
        label: /description/i,
        value: 'test description\nnext line',
        name: 'description',
      },
    ];

    const { getByText, getByLabelText } = render(
      <NewIssueForm onSubmit={onSubmitMock} />,
    );

    stubValues.forEach(({ label, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });
    });

    fireEvent.click(getByText(/create/i).closest('button') || document);

    expect(onSubmitMock.mock.calls[0][0]).toEqual(
      stubValues.reduce((a, { name, value }) => ({ ...a, [name]: value }), {}),
    );
  });
});
