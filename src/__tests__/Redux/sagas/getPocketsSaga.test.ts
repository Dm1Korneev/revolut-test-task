import getPocketsSaga from 'Redux/sagas/getPocketsSaga';

import * as APIRequests from 'API/requests';
import * as ReduxActions from 'Redux/actions';

jest.mock('API/requests');
APIRequests.getPockets.mockImplementation(() => 'getPockets');

jest.mock('Redux/actions');
const spySetPockets = jest.spyOn(ReduxActions, 'setPockets').mockImplementation((payload) => ({ action: 'setPockets', payload }));

describe('getPocketsSaga saga', () => {
  afterEach(() => {
    spySetPockets.mockClear();
  });

  test('should call setPockets and GET_POCKETS_SUCCESS actions', async () => {
    const { dispatched } = await global.recordSaga(getPocketsSaga);

    expect(dispatched).toContainEqual({ action: 'setPockets', payload: { pockets: 'getPockets' } });
    expect(dispatched).toContainEqual({ type: 'GET_POCKETS_SUCCESS', payload: { pockets: 'getPockets' } });
    expect(spySetPockets).toHaveBeenCalledTimes(1);
  });

  test('should call GET_POCKETS_FAILURE actions', async () => {
    APIRequests.getPockets.mockImplementationOnce(() => {
      throw 'getPocketsError';
    });

    const { dispatched } = await global.recordSaga(getPocketsSaga);

    expect(dispatched).toContainEqual({ type: 'GET_POCKETS_FAILURE', payload: { error: 'getPocketsError' } });
    expect(spySetPockets).toHaveBeenCalledTimes(0);
  });
});
