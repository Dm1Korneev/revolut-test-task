import exchangeSaga from 'Redux/sagas/exchangeSaga';

import * as SelectorsExchange from 'Selectors/exchange';
import * as SelectorsRates from 'Selectors/rates';
import * as ReduxActions from 'Redux/actions';

jest.mock('Selectors/exchange');
SelectorsExchange.pocketFromCurrencySelector.mockImplementation(() => 'USD');
SelectorsExchange.pocketFromValueSelector.mockImplementation(() => 1000);
SelectorsExchange.pocketToCurrencySelector.mockImplementation(() => 'EUR');
SelectorsExchange.pocketToValueSelector.mockImplementation(() => 4000);
SelectorsExchange.writeOffValueSelector.mockImplementation(() => 100);

jest.mock('Selectors/rates');
SelectorsRates.rateSelector.mockImplementation(() => 0.88);

jest.mock('Redux/actions');
const spySetPockets = jest.spyOn(ReduxActions, 'setPockets').mockImplementation((payload) => ({ action: 'setPockets', payload }));

describe('exchangeSaga saga', () => {
  afterEach(() => {
    spySetPockets.mockClear();
  });

  test('should call setPockets and EXCHANGE_SUCCESS actions', async () => {
    const { dispatched } = await global.recordSaga(exchangeSaga);

    expect(dispatched).toContainEqual({
      action: 'setPockets',
      payload: { pockets: { EUR: 4088, USD: 900 } },
    });
    expect(dispatched).toContainEqual({ type: 'EXCHANGE_SUCCESS' });
    expect(spySetPockets).toHaveBeenCalledTimes(1);
  });

  test('should throw error if currencies from and to same', async () => {
    SelectorsExchange.pocketToCurrencySelector.mockImplementation(() => 'USD');

    const { dispatched } = await global.recordSaga(exchangeSaga);

    expect(dispatched).toContainEqual({
      type: 'EXCHANGE_FAILURE',
      payload: { error: new Error('Currencies from and to must be different') },
    });
    expect(spySetPockets).toHaveBeenCalledTimes(0);
  });
});
