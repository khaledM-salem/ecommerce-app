import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Login from '../pages/login';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Login component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });
});
