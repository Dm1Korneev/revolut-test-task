import * as actions from 'Redux/actions';
import * as actionNames from 'Constants/actionNames';

const getRequestActionName = (actionName: string): string => `${actionName}_REQUEST`;

describe('actions', () => {
  test('should create an action to get rates', () => {
    const expectedAction = {
      type: getRequestActionName(actionNames.GET_RATES),
      payload: undefined,
    };
    expect(actions.getRates()).toStrictEqual(expectedAction);
  });

  test('should create an action to get pockets', () => {
    const expectedAction = {
      type: getRequestActionName(actionNames.GET_POCKETS),
      payload: undefined,
    };
    expect(actions.getPockets()).toStrictEqual(expectedAction);
  });

  test('should create an action to set pockets', () => {
    const expectedAction = {
      type: actionNames.SET_POCKETS,
      payload: {
        pockets: {
          USD: 56,
          EUR: 0.45,
        },
      },
    };
    expect(actions.setPockets({
      pockets: {
        USD: 56,
        EUR: 0.45,
      },
    })).toStrictEqual(expectedAction);
  });

  test('should create an action to set pocket from', () => {
    const expectedAction = {
      type: actionNames.SET_POCKET_FROM,
      payload: 'EUR',
    };
    expect(actions.setPocketFrom('EUR')).toStrictEqual(expectedAction);
  });

  test('should create an action to set pocket to', () => {
    const expectedAction = {
      type: actionNames.SET_POCKET_TO,
      payload: 'USD',
    };
    expect(actions.setPocketTo('USD')).toStrictEqual(expectedAction);
  });

  test('should create an action to change write off value', () => {
    const expectedAction = {
      type: actionNames.CHANGE_WRITE_OFF_VALUE,
      payload: 12.56,
    };
    expect(actions.changeWriteOffValue(12.56)).toStrictEqual(expectedAction);
  });

  test('should create an action to change receive value', () => {
    const expectedAction = {
      type: actionNames.CHANGE_RECEIVE_VALUE,
      payload: 1000.23,
    };
    expect(actions.changeReceiveValue(1000.23)).toStrictEqual(expectedAction);
  });

  test('should create an action to set write off value', () => {
    const expectedAction = {
      type: actionNames.SET_WRITE_OFF_VALUE,
      payload: 0.01,
    };
    expect(actions.setWriteOffValue(0.01)).toStrictEqual(expectedAction);
  });

  test('should create an action to set receive value', () => {
    const expectedAction = {
      type: actionNames.SET_RECEIVE_VALUE,
      payload: 12,
    };
    expect(actions.setReceiveValue(12)).toStrictEqual(expectedAction);
  });

  test('should create an action to drop exchange values', () => {
    const expectedAction = {
      type: actionNames.DROP_EXCHANGE_VALUES,
      payload: undefined,
    };
    expect(actions.dropExchangeValues()).toStrictEqual(expectedAction);
  });

  test('should create an action to exchange', () => {
    const expectedAction = {
      type: getRequestActionName(actionNames.EXCHANGE),
      payload: undefined,
    };
    expect(actions.exchange()).toStrictEqual(expectedAction);
  });

  test('should create an action to change pockets', () => {
    const expectedAction = {
      type: actionNames.CHANGE_POCKETS,
      payload: undefined,
    };
    expect(actions.changePockets()).toStrictEqual(expectedAction);
  });
});
