import Container from 'Components/PocketFrom';

jest.mock('Components/PocketFrom/PocketFrom', () => 'PocketFromComponent');
jest.mock('Components/commonHoc', () => (...args) => args);
jest.mock('Selectors/exchange', () => ({
  pocketFromCurrencySelector: () => 'pocketFromCurrencySelector',
  pocketFromValueSelector: () => 'pocketFromValueSelector',
  writeOffValueSelector: () => 'writeOffValueSelector',
}));
jest.mock('Selectors/currencies', () => ({
  currenciesSelector: () => 'currenciesSelector',
}));
jest.mock('Redux/actions', () => ({
  changeWriteOffValue: 'changeWriteOffValue',
  setPocketFrom: 'setPocketFrom',
}));

describe('PocketFrom container', () => {
  test('container get current data from store', () => {
    const props = {};

    const [componentName, { mapStateToProps, mapDispatchToProps }] = Container;
    expect(componentName).toBe('PocketFromComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currency: 'pocketFromCurrencySelector',
      valueHave: 'pocketFromValueSelector',
      currencies: 'currenciesSelector',
      value: 'writeOffValueSelector',
    });
    expect(mapDispatchToProps).toStrictEqual({
      setPocketCurrency: 'setPocketFrom',
      changeValue: 'changeWriteOffValue',
    });
  });
});
