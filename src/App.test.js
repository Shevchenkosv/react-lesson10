import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const textEl = screen.getByText(/всем привет/i);
  const btn = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input value/i);



  expect(textEl).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
