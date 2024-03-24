import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello chrome', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello chrome/i);
  expect(linkElement).toBeInTheDocument();
});
