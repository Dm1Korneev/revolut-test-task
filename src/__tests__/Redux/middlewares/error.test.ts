import errorMiddleware from 'Redux/middlewares/error';
import { PayloadAction } from '@reduxjs/toolkit';

describe('Error middleware', () => {
  beforeEach(() => jest.clearAllMocks());

  type CreateType = {
    next: jest.Mock;
    invoke: (action: PayloadAction<any>) => any;
  }
  const create = (): CreateType => {
    const next = jest.fn();
    const invoke = (action: PayloadAction<any>): any => errorMiddleware()(next)(action);

    return { next, invoke };
  };

  test('passes through action', () => {
    const { next, invoke } = create();
    const action = {
      type: 'TEST',
      payload: undefined,
    };
    invoke(action);
    expect(next).toHaveBeenCalled();
  });

  test('call console warn with error', () => {
    const spy = jest.spyOn(global.console, 'warn').mockImplementationOnce(() => {});

    const { invoke } = create();
    const action = {
      type: 'TEST',
      payload: {
        error: 'Test error text',
      },
    };
    invoke(action);
    expect(spy).toHaveBeenCalledWith('[Error Middleware error]:', 'Test error text');
  });
});
