import Container from 'Components/PocketTo';

jest.mock('Components/PocketTo/PocketTo', () => 'PocketToComponent');
jest.mock('Components/commonHoc', () => (...args) => args);
jest.mock('Selectors/exchange', () => ({
  pocketToCurrencySelector: () => 'pocketToCurrencySelector',
  pocketToValueSelector: () => 'pocketToValueSelector',
  receiveValueSelector: () => 'receiveValueSelector',
}));
jest.mock('Selectors/currencies', () => ({
  currenciesSelector: () => 'currenciesSelector',
}));
jest.mock('Redux/actions', () => ({
  changeReceiveValue: 'changeReceiveValue',
  setPocketTo: 'setPocketTo',
}));

describe('PocketTo container', () => {
  test('container get current data from store', () => {
    const props = {};

    const [componentName, { mapStateToProps, mapDispatchToProps }] = Container;
    expect(componentName).toBe('PocketToComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currency: 'pocketToCurrencySelector',
      valueHave: 'pocketToValueSelector',
      currencies: 'currenciesSelector',
      value: 'receiveValueSelector',
    });

    expect(mapDispatchToProps).toStrictEqual({
      setPocketCurrency: 'setPocketTo',
      changeValue: 'changeReceiveValue',
    });
  });
});
