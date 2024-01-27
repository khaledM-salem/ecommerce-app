import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from '../app/page';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Home component', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      render(<Home />);
    });
  });
});
