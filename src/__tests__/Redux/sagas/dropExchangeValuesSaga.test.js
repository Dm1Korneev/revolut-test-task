import dropExchangeValuesSaga from 'Redux/sagas/dropExchangeValuesSaga';

jest.mock('Redux/actions', () => ({
  dropExchangeValues: (payload) => ({ action: 'dropExchangeValues', payload }),
}));

describe('changeWriteOffValueSaga saga', () => {
  test('should call dropExchangeValues action', async () => {
    const { dispatched } = await global.recordSaga(dropExchangeValuesSaga);

    expect(dispatched).toContainEqual({ action: 'dropExchangeValues' });
  });
});
