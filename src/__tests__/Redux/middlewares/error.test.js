import errorMiddleware from 'Redux/middlewares/error';

describe('Error middleware', () => {
  beforeEach(() => jest.clearAllMocks());

  const create = () => {
    const next = jest.fn();
    const invoke = (action) => errorMiddleware()(next)(action);

    return { next, invoke };
  };

  test('passes through action', () => {
    const { next, invoke } = create();
    const action = { type: 'TEST' };
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
