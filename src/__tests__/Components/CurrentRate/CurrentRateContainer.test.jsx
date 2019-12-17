import Container from 'Components/CurrentRate';

jest.mock('Components/CurrentRate/CurrentRate', () => 'CurrentRateComponent');
jest.mock('Components/commonHoc', () => (...args) => args);
jest.mock('Selectors/exchange', () => ({
  pocketFromCurrencySelector: () => 'pocketFromCurrencySelectorResult',
  pocketToCurrencySelector: () => 'pocketToCurrencySelectorResult',
}));
jest.mock('Selectors/rates', () => ({
  rateSelector: () => 'rateSelectorResult',
}));

describe('CurrentRate container', () => {
  test('container get current data from store', () => {
    const props = {};

    const [componentName, { mapStateToProps }] = Container;
    expect(componentName).toBe('CurrentRateComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currencyFrom: 'pocketFromCurrencySelectorResult',
      currencyTo: 'pocketToCurrencySelectorResult',
      currentRate: 'rateSelectorResult',
    });
  });

  test('container change currencies when reverse = true', () => {
    const props = { reverse: true };

    const [componentName, { mapStateToProps }] = Container;
    expect(componentName).toBe('CurrentRateComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currencyFrom: 'pocketToCurrencySelectorResult',
      currencyTo: 'pocketFromCurrencySelectorResult',
      currentRate: 'rateSelectorResult',
    });
  });
});
