import { mocked } from 'ts-jest/utils';
import dropExchangeValuesSaga from 'Redux/sagas/dropExchangeValuesSaga';

import * as ReduxActions from 'Redux/actions';

jest.mock('Redux/actions');
mocked(ReduxActions.dropExchangeValues).mockImplementation((payload) => ({ type: 'DROP_EXCHANGE_VALUES', payload }));

describe('changeWriteOffValueSaga saga', () => {
  test('should call dropExchangeValues action', async () => {
    const { dispatched } = await recordSaga(dropExchangeValuesSaga);

    expect(dispatched).toContainEqual({ type: 'DROP_EXCHANGE_VALUES', payload: undefined });
  });
});
