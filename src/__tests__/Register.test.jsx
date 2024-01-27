import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Register from '../pages/register'; // Replace with your actual path
import '@testing-library/jest-dom';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Register component', () => {
  it('renders without crashing', () => {
    render(<Register />);
    expect(screen.getByTestId('Register')).toBeInTheDocument();
  });
});
