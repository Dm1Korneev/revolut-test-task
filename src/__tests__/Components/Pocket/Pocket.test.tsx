import React from 'react';
import { render } from '@testing-library/react';
import Pocket from 'Components/Pocket';

jest.mock('Components/CurrencySelect', () => mockComponent('CurrencySelect'));
jest.mock('Components/ValueInput', () => mockComponent('ValueInput'));
jest.mock('Components/Pocket/PocketValue', () => mockComponent('PocketValue'));

describe('Pocket component', () => {
  const props = {
    currency: 'USD',
    value: 100.87,
    valueHave: 2000.90,
    currencies: ['USD', 'EUR', 'GBP'],
    setPocketCurrency: jest.fn(),
    changeValue: jest.fn(),
    valuePrefix: '-',
    inputValueLabel: 'Test label input',
    selectCurrencyLabel: 'Test label select',
  };

  test('renders the component', () => {
    const { asFragment } = render(<Pocket {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
