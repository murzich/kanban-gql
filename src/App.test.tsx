import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contain the link - test on working the testing-library', () => {
  const { getByText } = render(<App />);

  expect(getByText('Learn React!')).toBeDefined();
});
