import Container from 'Components/ExchangeButton';

jest.mock('Components/ExchangeButton/ExchangeButton', () => 'ExchangeButtonComponent');
jest.mock('Components/commonHoc', () => (...args: Array<any>): Array<any> => args);
jest.mock('Redux/actions', () => ({
  exchange: 'exchange',
}));
jest.mock('Selectors/exchange', () => ({
  exchagesValuesIsSetSelector: (): boolean => true,
  currenciesFromToSameSelector: (): boolean => false,
}));

describe('ExchangeButton container', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('container get current data from store', () => {
    const props = {};

    const [componentName, { mapStateToProps, mapDispatchToProps }] = Container as any;
    expect(componentName).toBe('ExchangeButtonComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      isActive: true,
    });
    expect(mapDispatchToProps).toStrictEqual({
      exchange: 'exchange',
    });
  });

  test('isActive prop is false if currenciesFromToSameSelector if true', () => {
    jest.doMock('Selectors/exchange', () => ({
      exchagesValuesIsSetSelector: (): boolean => true,
      currenciesFromToSameSelector: (): boolean => true,
    }));
    const props = {};

    const [, { mapStateToProps }] = require('Components/ExchangeButton').default;
    expect(mapStateToProps({}, props)).toStrictEqual({
      isActive: false,
    });
  });
});
