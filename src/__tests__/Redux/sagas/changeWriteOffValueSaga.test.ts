import changeWriteOffValueSaga from 'Redux/sagas/changeWriteOffValueSaga';

import * as SelectorsExchange from 'Selectors/exchange';
import * as SelectorsRates from 'Selectors/rates';

jest.mock('Selectors/exchange');
SelectorsExchange.pocketFromCurrencySelector.mockImplementation(() => 'USD');
SelectorsExchange.pocketFromValueSelector.mockImplementation(() => 1000);
SelectorsExchange.pocketToCurrencySelector.mockImplementation(() => 'EUR');

jest.mock('Selectors/rates');
SelectorsRates.rateSelector.mockImplementation(() => 0.88);

jest.mock('Redux/actions', () => ({
  setReceiveValue: (payload) => ({ action: 'setReceiveValue', payload }),
  setWriteOffValue: (payload) => ({ action: 'setWriteOffValue', payload }),
}));

describe('changeWriteOffValueSaga saga', () => {
  test('should call setWriteOffValue and setReceiveValue actions', async () => {
    const initialAction = { payload: 100 };
    const { dispatched } = await global.recordSaga(changeWriteOffValueSaga, initialAction);

    expect(dispatched).toContainEqual({ action: 'setReceiveValue', payload: 88 });
    expect(dispatched).toContainEqual({ action: 'setWriteOffValue', payload: 100 });
  });

  test('should call setWriteOffValue and setReceiveValue actions with null when payload is null', async () => {
    const initialAction = { payload: null };
    const { dispatched } = await global.recordSaga(changeWriteOffValueSaga, initialAction);

    expect(dispatched).toContainEqual({ action: 'setReceiveValue', payload: null });
    expect(dispatched).toContainEqual({ action: 'setWriteOffValue', payload: null });
  });

  test('should not call actions if payload > pocketFromValue', async () => {
    const initialAction = { payload: 1001 };
    const { dispatched } = await global.recordSaga(changeWriteOffValueSaga, initialAction);

    expect(dispatched).toStrictEqual([]);
  });
});
