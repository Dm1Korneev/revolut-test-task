import Container from 'Components/CurrencyConverter';

jest.mock('Components/CurrencyConverter/CurrencyConverter', () => 'CurrencyConverterComponent');
jest.mock('Components/commonHoc', () => (...args) => args);
jest.mock('Redux/actions', () => ({
  getPockets: 'getPockets',
  getRates: 'getRates',
}));
jest.mock('Selectors/loaded', () => ({
  getRatesLoadedSelector: () => false,
}));

describe('CurrencyConverter container', () => {
  test('container get current data from store', () => {
    const props = {};

    const [componentName, { mapStateToProps, mapDispatchToProps }] = Container;
    expect(componentName).toBe('CurrencyConverterComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      isBusy: true,
    });
    expect(mapDispatchToProps).toStrictEqual({
      getRates: 'getRates',
      getPockets: 'getPockets',
    });
  });
});
