import changeReceiveValueSaga from 'Redux/sagas/changeReceiveValueSaga';

import * as SelectorsExchange from 'Selectors/exchange';
import * as SelectorsRates from 'Selectors/rates';

jest.mock('Selectors/exchange');
SelectorsExchange.pocketFromCurrencySelector.mockImplementation(() => 'USD');
SelectorsExchange.pocketFromValueSelector.mockImplementation(() => 1000);
SelectorsExchange.pocketToCurrencySelector.mockImplementation(() => 'EUR');

jest.mock('Selectors/rates');
SelectorsRates.rateSelector.mockImplementation(() => 1.22);

jest.mock('Redux/actions', () => ({
  setReceiveValue: (payload) => ({ action: 'setReceiveValue', payload }),
  setWriteOffValue: (payload) => ({ action: 'setWriteOffValue', payload }),
}));

describe('ChangeReceiveValue saga', () => {
  test('should call setWriteOffValue and setReceiveValue actions', async () => {
    const initialAction = { payload: 100 };
    const { dispatched } = await global.recordSaga(changeReceiveValueSaga, initialAction);

    expect(dispatched).toContainEqual({ action: 'setReceiveValue', payload: 100 });
    expect(dispatched).toContainEqual({ action: 'setWriteOffValue', payload: 122 });
  });

  test('should call setWriteOffValue and setReceiveValue actions with null when payload is null', async () => {
    const initialAction = { payload: null };
    const { dispatched } = await global.recordSaga(changeReceiveValueSaga, initialAction);

    expect(dispatched).toContainEqual({ action: 'setReceiveValue', payload: null });
    expect(dispatched).toContainEqual({ action: 'setWriteOffValue', payload: null });
  });

  test('should not call actions if payload > pocketFromValue', async () => {
    const initialAction = { payload: 1200 };
    const { dispatched } = await global.recordSaga(changeReceiveValueSaga, initialAction);

    expect(dispatched).toStrictEqual([]);
  });
});
