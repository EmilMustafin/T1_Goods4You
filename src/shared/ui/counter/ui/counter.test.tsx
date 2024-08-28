import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Counter, Props } from './counter';

describe('Counter component', () => {
  const defaultProps: Props = {
    counter: 1,
    size: 's',
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };

  it('renders the counter with initial props', () => {
    render(<Counter {...defaultProps} />);

    expect(screen.getByText(/1 item/i)).toBeInTheDocument();
  });
});
