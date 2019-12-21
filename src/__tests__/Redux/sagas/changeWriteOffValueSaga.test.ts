import { mocked } from 'ts-jest/utils';
import changeWriteOffValueSaga from 'Redux/sagas/changeWriteOffValueSaga';

import * as SelectorsExchange from 'Selectors/exchange';
import * as SelectorsRates from 'Selectors/rates';
import * as ReduxActions from 'Redux/actions';

jest.mock('Selectors/exchange');
mocked(SelectorsExchange.pocketFromCurrencySelector).mockImplementation(() => 'USD');
mocked(SelectorsExchange.pocketFromValueSelector).mockImplementation(() => 1000);
mocked(SelectorsExchange.pocketToCurrencySelector).mockImplementation(() => 'EUR');

jest.mock('Selectors/rates');
mocked(SelectorsRates.rateSelector).mockImplementation(() => 0.88);

jest.mock('Redux/actions');
mocked(ReduxActions.setReceiveValue).mockImplementation((payload) => ({ type: 'setReceiveValue', payload }));
mocked(ReduxActions.setWriteOffValue).mockImplementation((payload) => ({ type: 'setWriteOffValue', payload }));

describe('changeWriteOffValueSaga saga', () => {
  test('should call setWriteOffValue and setReceiveValue actions', async () => {
    const initialAction = { payload: 100 };
    const { dispatched } = await recordSaga(changeWriteOffValueSaga, initialAction);

    expect(dispatched).toContainEqual({ type: 'setReceiveValue', payload: 88 });
    expect(dispatched).toContainEqual({ type: 'setWriteOffValue', payload: 100 });
  });

  test('should call setWriteOffValue and setReceiveValue actions with null when payload is null', async () => {
    const initialAction = { payload: null };
    const { dispatched } = await recordSaga(changeWriteOffValueSaga, initialAction);

    expect(dispatched).toContainEqual({ type: 'setReceiveValue', payload: null });
    expect(dispatched).toContainEqual({ type: 'setWriteOffValue', payload: null });
  });

  test('should not call actions if payload > pocketFromValue', async () => {
    const initialAction = { payload: 1001 };
    const { dispatched } = await recordSaga(changeWriteOffValueSaga, initialAction);

    expect(dispatched).toStrictEqual([]);
  });
});
