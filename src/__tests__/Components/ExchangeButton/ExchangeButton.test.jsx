import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ExchangeButton from 'Components/ExchangeButton/ExchangeButton';

describe('ExchangeButton component', () => {
  const exchange = jest.fn();
  const props = {
    exchange,
    isActive: true,
  };

  test('renders the component isActive = true', () => {
    const { asFragment } = render(<ExchangeButton {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders the component isActive = false', () => {
    const propslocal = { ...props, isActive: false };
    const { asFragment } = render(<ExchangeButton {...propslocal} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('change value', () => {
    const { getByRole } = render(<ExchangeButton {...props} />);
    fireEvent.click(getByRole('button'));
    expect(exchange).toHaveBeenCalledTimes(1);
  });
});
