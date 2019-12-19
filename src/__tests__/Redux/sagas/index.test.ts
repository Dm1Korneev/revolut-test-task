import rootSaga from 'Redux/sagas';
import * as getPocketsSaga from 'Redux/sagas/getPocketsSaga';
import * as getRatesSaga from 'Redux/sagas/getRatesSaga';
import * as changeWriteOffValueSaga from 'Redux/sagas/changeWriteOffValueSaga';
import * as changeReceiveValueSaga from 'Redux/sagas/changeReceiveValueSaga';
import * as exchangeSaga from 'Redux/sagas/exchangeSaga';
import * as dropExchangeValuesSaga from 'Redux/sagas/dropExchangeValuesSaga';

const spyGetPocketsSaga = jest.spyOn(getPocketsSaga, 'default').mockImplementation(() => () => {});
const spyGetRatesSaga = jest.spyOn(getRatesSaga, 'default').mockImplementation(() => () => {});
const spyChangeWriteOffValueSaga = jest.spyOn(changeWriteOffValueSaga, 'default').mockImplementation(() => () => {});
const spyChangeReceiveValueSaga = jest.spyOn(changeReceiveValueSaga, 'default').mockImplementation(() => () => {});
const spyExchangeSaga = jest.spyOn(exchangeSaga, 'default').mockImplementation(() => () => {});
const spyDropExchangeValuesSaga = jest.spyOn(dropExchangeValuesSaga, 'default').mockImplementation(() => () => {});

describe('Root saga', () => {
  afterEach(() => {
    spyGetPocketsSaga.mockClear();
    spyGetRatesSaga.mockClear();
    spyChangeWriteOffValueSaga.mockClear();
    spyChangeReceiveValueSaga.mockClear();
    spyExchangeSaga.mockClear();
    spyDropExchangeValuesSaga.mockClear();
  });

  test('should take GET_POCKETS_REQUEST action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'GET_POCKETS_REQUEST',
    });

    expect(spyGetPocketsSaga).toHaveBeenCalledTimes(1);
  });

  test('should take GET_RATES_REQUEST action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'GET_RATES_REQUEST',
    });

    expect(spyGetRatesSaga).toHaveBeenCalledTimes(1);
  });

  test('should take CHANGE_WRITE_OFF_VALUE action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'CHANGE_WRITE_OFF_VALUE',
    });

    expect(spyChangeWriteOffValueSaga).toHaveBeenCalledTimes(1);
  });

  test('should take CHANGE_RECEIVE_VALUE action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'CHANGE_RECEIVE_VALUE',
    });

    expect(spyChangeReceiveValueSaga).toHaveBeenCalledTimes(1);
  });

  test('should take EXCHANGE_REQUEST action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'EXCHANGE_REQUEST',
    });

    expect(spyExchangeSaga).toHaveBeenCalledTimes(1);
  });

  test('should take EXCHANGE_SUCCESS action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'EXCHANGE_SUCCESS',
    });

    expect(spyDropExchangeValuesSaga).toHaveBeenCalledTimes(1);
  });

  test('should take SET_POCKET_FROM action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'SET_POCKET_FROM',
    });

    expect(spyDropExchangeValuesSaga).toHaveBeenCalledTimes(1);
  });

  test('should take SET_POCKET_TO action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'SET_POCKET_TO',
    });

    expect(spyDropExchangeValuesSaga).toHaveBeenCalledTimes(1);
  });

  test('should take CHANGE_POCKETS action', async () => {
    const { emit } = await global.recordSaga(rootSaga);
    emit({
      type: 'CHANGE_POCKETS',
    });

    expect(spyDropExchangeValuesSaga).toHaveBeenCalledTimes(1);
  });
});
