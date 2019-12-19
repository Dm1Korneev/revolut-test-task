import { mocked } from 'ts-jest/utils';
import Container from 'Components/CurrencyConverter';
import * as SelectorsLoaded from 'Selectors/loaded';

jest.mock('Components/CurrencyConverter/CurrencyConverter', () => 'CurrencyConverterComponent');
jest.mock('Components/commonHoc', () => (...args: [any]): [any] => args);
jest.mock('Redux/actions', () => ({
  getPockets: 'getPockets',
  getRates: 'getRates',
}));
jest.mock('Selectors/loaded');
mocked(SelectorsLoaded.getRatesLoadedSelector).mockImplementation(() => false);

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
