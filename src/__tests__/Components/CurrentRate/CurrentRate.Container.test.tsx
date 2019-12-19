import { mocked } from 'ts-jest/utils';
import Container from 'Components/CurrentRate';

import * as SelectorsExchange from 'Selectors/exchange';
import * as SelectorsRates from 'Selectors/rates';

jest.mock('Components/CurrentRate/CurrentRate', () => 'CurrentRateComponent');
jest.mock('Components/commonHoc', () => (...args) => args);

jest.mock('Selectors/exchange');
mocked(SelectorsExchange.pocketFromCurrencySelector).mockImplementation(() => 'USD');
mocked(SelectorsExchange.pocketToCurrencySelector).mockImplementation(() => 'GBP');

jest.mock('Selectors/rates');
mocked(SelectorsRates.rateSelector).mockImplementation(() => 1.22);

describe('CurrentRate container', () => {
  test('container get current data from store', () => {
    const props = {};

    const [componentName, { mapStateToProps }] = Container;
    expect(componentName).toBe('CurrentRateComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currencyFrom: 'USD',
      currencyTo: 'GBP',
      currentRate: 1.22,
    });
  });

  test('container change currencies when reverse = true', () => {
    const props = { reverse: true };

    const [componentName, { mapStateToProps }] = Container;
    expect(componentName).toBe('CurrentRateComponent');
    expect(mapStateToProps({}, props)).toStrictEqual({
      currencyFrom: 'GBP',
      currencyTo: 'USD',
      currentRate: 1.22,
    });
  });
});
