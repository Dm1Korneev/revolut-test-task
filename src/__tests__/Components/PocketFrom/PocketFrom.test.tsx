import React from 'react';
import { render } from '@testing-library/react';
import PocketFrom from 'Components/PocketFrom/PocketFrom';

jest.mock('Components/Pocket', () => mockComponent('Pocket'));

describe('PocketFrom component', () => {
  const props = {
    currency: 'USD',
    currencies: ['USD', 'EUR', 'GBP'],
    setPocketCurrency: (): void => {},
    changeValue: (): void => {},
    inputValueLabel: 'inputValueLabelTest',
    selectCurrencyLabel: 'selectCurrencyLabeltsTest',
  };

  test('renders the component', () => {
    const { asFragment } = render(<PocketFrom {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
