import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.js';

test('simulate button click', async () => {
  render(<App />);
  const button = screen.getByRole('button');
  await userEvent.click(button);
  const headline = screen.getByText(/hello world/i);
  expect(headline).toBeInTheDocument();
});
