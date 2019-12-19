import { errorSelector } from 'Selectors/errors';

describe('error selectors', () => {
  const store = {
    errors: {
      TYPE_1: 'error text 1',
      TYPE_2: 'error text 2',
      TYPE_3: 'error text 3',
    },
  };

  test('errorSelector should return error by type', () => {
    expect(errorSelector(store, 'TYPE_2')).toStrictEqual(
      'error text 2',
    );
  });
});
