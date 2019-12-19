import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CurrencySelect from 'Components/CurrencySelect/';

describe('CurrencySelect component', () => {
  const setPocketCurrency = jest.fn();
  const props = {
    currency: 'USD',
    currencies: ['USD', 'EUR', 'GBP'],
    setPocketCurrency,
    label: 'test label',
  };

  test('renders the component', () => {
    const { asFragment } = render(<CurrencySelect {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('change currency', () => {
    const { getByRole } = render(<CurrencySelect {...props} />);
    fireEvent.change(getByRole('combobox'), { target: { value: 'EUR' } });
    expect(setPocketCurrency).toHaveBeenCalledWith('EUR');
  });
});
