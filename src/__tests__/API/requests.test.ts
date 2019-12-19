import { getPockets, getRates } from 'API/requests';
import { CURRENCIES_RATE_API_URL } from 'Constants';

jest.mock('API/dummyData', () => ({
  pockets: {
    GBP: 111.10,
    EUR: 222.20,
    USD: 333.30,
  },
}));

const mockFetchPromiseGetRates = Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ getRates: 'getRates' }),
});

const mockFetchPromise = Promise.resolve({
  ok: true,
  json: () => Promise.resolve({}),
});

jest.spyOn(global, 'fetch').mockImplementation((url) => {
  if (url.includes(CURRENCIES_RATE_API_URL)) {
    return mockFetchPromiseGetRates;
  }
  return mockFetchPromise;
});

describe('API requests getPockets', () => {
  beforeEach(() => jest.clearAllMocks());

  test('shoult resolve promise with pockets state', async () => {
    await expect(getPockets()).resolves.toStrictEqual({
      GBP: 111.10,
      EUR: 222.20,
      USD: 333.30,
    });
  });

  test('shoult resolve promise with rates', async () => {
    await expect(getRates()).resolves.toStrictEqual({ getRates: 'getRates' });
  });

  test('shoult reject promise with rates on error', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve({ error: 'error' }),
    }));

    await expect(getRates()).rejects.toStrictEqual({ error: 'error' });
  });
});
