import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

it('renders app title', () => {
  render(<AppHeader />);
  const titleElement = screen.getByText(/Tiny World/i);
  expect(titleElement).toBeInTheDocument();
});


it('renders app subtitle', () => {
  render(<AppHeader />);
  const subTitleElement = screen.getByText(/Create your own Islands/i);
  expect(subTitleElement).toBeInTheDocument();
});