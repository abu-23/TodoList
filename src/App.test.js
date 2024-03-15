import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODO Header', () => {
  render(<App />);
  const linkElement = screen.getByText("TODO");
  expect(linkElement).toBeInTheDocument();
});
