import React from 'react';
import { render } from '@testing-library/react';
import CurrencyConverter from 'Components/CurrencyConverter/CurrencyConverter';

jest.mock('Components/PocketFrom', () => mockComponent('PocketFrom'));
jest.mock('Components/PocketTo', () => mockComponent('PocketTo'));
jest.mock('Components/CurrentRate', () => mockComponent('CurrentRate'));
jest.mock('Components/ExchangeButton', () => mockComponent('ExchangeButton'));
jest.mock('Components/Loader', () => mockComponent('Loader'));
jest.mock('Components/ChangePocketsButton', () => mockComponent('ChangePocketsButton'));

describe('CurrencyConverter component', () => {
  const props = {
    getPockets: jest.fn(),
    getRates: jest.fn(),
    isBusy: false,
  };

  test('renders the component', () => {
    const { asFragment } = render(<CurrencyConverter {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('show loader when isBusy = true', () => {
    const propsLocal = { ...props, isBusy: true };
    const { asFragment } = render(<CurrencyConverter {...propsLocal} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('call get methods', () => {
    const getPockets = jest.fn();
    const getRates = jest.fn();
    const propsLocal = { ...props, getPockets, getRates };

    render(<CurrencyConverter {...propsLocal} />);
    expect(getPockets).toHaveBeenCalledTimes(1);
    expect(getRates).toHaveBeenCalledTimes(1);
  });
});
