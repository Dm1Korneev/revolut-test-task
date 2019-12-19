import { pockets } from 'API/dummyData';

describe('API dummyData', () => {
  test('pockets should return object', () => {
    expect(pockets).toBeInstanceOf(Object);
  });
});
