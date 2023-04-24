import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.js';

describe('testing headline', () => {
  test('if headline is initially not shown', () => {
    render(<App />);
    const headline = screen.queryByText(/hello world/i);
    expect(headline).toBeNull();
  });
  test('if headline is shown after button click', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    const headline = screen.getByText(/hello world/i);
    expect(headline).toBeInTheDocument();
  });
});
