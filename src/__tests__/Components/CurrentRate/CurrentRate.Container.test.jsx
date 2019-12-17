import Container from 'Components/CurrentRate';

jest.mock('Components/CurrentRate/CurrentRate', () => 'CurrentRateComponent');
jest.mock('Components/commonHoc', () => (...args) => args);
jest.mock('Selectors/exchange', () => ({
  pocketFromCurrencySelector: () => 'pocketFromCurrencySelector',
  pocketToCurrencySelector: () => 'pocketToCurrencySelector',
}));
jest.mock('Selectors/rates', () => ({
  rateSelector: () => 'rateSelector',
}));

describe('CurrentRate container', () => {
  test('container get current data from store', () => {
    const props = {};

    const [componentName, { mapStateToProps }] = Container;
    expect(componentName).toBe('CurrentRateComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currencyFrom: 'pocketFromCurrencySelector',
      currencyTo: 'pocketToCurrencySelector',
      currentRate: 'rateSelector',
    });
  });

  test('container change currencies when reverse = true', () => {
    const props = { reverse: true };

    const [componentName, { mapStateToProps }] = Container;
    expect(componentName).toBe('CurrentRateComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currencyFrom: 'pocketToCurrencySelector',
      currencyTo: 'pocketFromCurrencySelector',
      currentRate: 'rateSelector',
    });
  });
});
