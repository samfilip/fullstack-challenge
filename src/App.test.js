import React from 'react'
import { render } from '@testing-library/react';
import App from './App.jsx';

test('renders Address: text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Address:');
  expect(textElement).toBeInTheDocument();
});

test('renders a search bar input field', () => {
  const { getByRole } = render(<App />);
  const inputElement = getByRole('searchBar')
  expect(inputElement).toBeInTheDocument();
});

test('renders a submit button', () => {
  const { getByRole } = render(<App />);
  const buttonElement = getByRole('button', {
    name: /search/i
  })
  expect(buttonElement).toBeInTheDocument();
});

