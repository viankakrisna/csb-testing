import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello />, div);
});

it('renders name prop', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello name="CodeSandbox" />, div);
  expect(div.textContent).toContain('CodeSandbox');
});
