import getRatesSaga from 'Redux/sagas/getRatesSaga';

import * as APIRequests from 'API/requests';
import * as ReduxActions from 'Redux/actions';

jest.mock('API/requests');
APIRequests.getRates.mockImplementation(() => 'getRates');

jest.mock('Redux/actions');
const spySetRates = jest.spyOn(ReduxActions, 'setRates').mockImplementation((payload) => ({ action: 'setRates', payload }));

describe('getRatesSaga saga', () => {
  afterEach(() => {
    spySetRates.mockClear();
  });

  test('should call setRates and GET_RATES_SUCCESS actions', async () => {
    const { dispatched } = await global.recordSaga(getRatesSaga);

    expect(dispatched).toContainEqual({ action: 'setRates', payload: { rates: 'getRates' } });
    expect(dispatched).toContainEqual({ type: 'GET_RATES_SUCCESS', payload: { rates: 'getRates' } });
    expect(spySetRates).toHaveBeenCalledTimes(1);
  });

  test('should call GET_RATES_FAILURE actions', async () => {
    APIRequests.getRates.mockImplementationOnce(() => {
      throw 'setRatesError';
    });

    const { dispatched } = await global.recordSaga(getRatesSaga);

    expect(dispatched).toContainEqual({ type: 'GET_RATES_FAILURE', payload: { error: 'setRatesError' } });
    expect(spySetRates).toHaveBeenCalledTimes(0);
  });
});
