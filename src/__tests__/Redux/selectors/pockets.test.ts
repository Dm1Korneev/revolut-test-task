import { pocketValueSelector } from 'Selectors/pockets';

describe('Rates selectors', () => {
  const store = {
    pockets: {
      EUR: 100.56,
      GBP: 200.00,
      USD: 300.99,
    },
  };

  test('pocketValueSelector should return value of the pocket', () => {
    expect(pocketValueSelector(store, 'EUR')).toStrictEqual(
      100.56,
    );
  });
});
