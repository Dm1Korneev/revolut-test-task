import React from 'react';
import { render } from '@testing-library/react';
import PocketTo from 'Components/PocketTo/PocketTo';

jest.mock('Components/Pocket', () => mockComponent('Pocket'));
jest.mock('Components/CurrentRate', () => mockComponent('CurrentRate'));

describe('PocketTo component', () => {
  const props = {
    currency: 'USD',
    currencies: ['USD', 'EUR', 'GBP'],
    setPocketCurrency: (): void => {},
    changeValue: (): void => {},
    inputValueLabel: 'inputValueLabelTest',
    selectCurrencyLabel: 'selectCurrencyLabeltsTest',
  };

  test('renders the component', () => {
    const { asFragment } = render(<PocketTo {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
