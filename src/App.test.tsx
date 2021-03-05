import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders viz', () => {
  render(<App />);
  const titleElement = screen.getByText(/tableau viz/i);
  expect(titleElement).toBeInTheDocument();
});
