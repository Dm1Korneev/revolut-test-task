import { mocked } from 'ts-jest/utils';
import changeReceiveValueSaga from 'Redux/sagas/changeReceiveValueSaga';

import * as SelectorsExchange from 'Selectors/exchange';
import * as SelectorsRates from 'Selectors/rates';
import * as ReduxActions from 'Redux/actions';

jest.mock('Selectors/exchange');
mocked(SelectorsExchange.pocketFromCurrencySelector).mockImplementation(() => 'USD');
mocked(SelectorsExchange.pocketFromValueSelector).mockImplementation(() => 1000);
mocked(SelectorsExchange.pocketToCurrencySelector).mockImplementation(() => 'EUR');

jest.mock('Selectors/rates');
mocked(SelectorsRates.rateSelector).mockImplementation(() => 1.22);

jest.mock('Redux/actions');
mocked(ReduxActions.setReceiveValue).mockImplementation((payload) => ({ type: 'setReceiveValue', payload }));
mocked(ReduxActions.setWriteOffValue).mockImplementation((payload) => ({ type: 'setWriteOffValue', payload }));

describe('ChangeReceiveValue saga', () => {
  test('should call setWriteOffValue and setReceiveValue actions', async () => {
    const initialAction = { type: '', payload: 100 };
    const { dispatched } = await recordSaga(changeReceiveValueSaga, initialAction);

    expect(dispatched).toContainEqual({ type: 'setReceiveValue', payload: 100 });
    expect(dispatched).toContainEqual({ type: 'setWriteOffValue', payload: 122 });
  });

  test('should call setWriteOffValue and setReceiveValue actions with null when payload is null', async () => {
    const initialAction = { type: '', payload: null };
    const { dispatched } = await recordSaga(changeReceiveValueSaga, initialAction);

    expect(dispatched).toContainEqual({ type: 'setReceiveValue', payload: null });
    expect(dispatched).toContainEqual({ type: 'setWriteOffValue', payload: null });
  });

  test('should not call actions if payload > pocketFromValue', async () => {
    const initialAction = { type: '', payload: 1200 };
    const { dispatched } = await recordSaga(changeReceiveValueSaga, initialAction);

    expect(dispatched).toStrictEqual([]);
  });
});
