import { CURRENCIES_RATE_API_ID, CURRENCIES_RATE_API_URL } from 'Constants';
import { pockets } from './dummyData';

type parseJSONInterface = {
  response: Response;
  result: Record<string, any>;
}

function parseJSON(response: Response): Promise<parseJSONInterface> {
  return new Promise((resolve) => response.json().then((result) => resolve({
    response,
    result,
  })));
}

function apiCall(URI: RequestInfo, optionsParams: RequestInit): Promise<object> {
  const options = {
    ...optionsParams,
    headers: {
      ...optionsParams.headers,
      Accept: 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    fetch(URI, options)
      .then(parseJSON)
      .then(({ response, result }: parseJSONInterface) => {
        if (response.ok) {
          return resolve(result);
        }
        return reject(result);
      });
  });
}

export const getPockets = (): object => new Promise((resolve) => resolve(pockets));

export const getRates = (): object => {
  const uri = `${CURRENCIES_RATE_API_URL}/latest.json?app_id=${CURRENCIES_RATE_API_ID}`;
  const options = {
    method: 'GET',
    mode: 'cors' as RequestMode,
  };

  return apiCall(uri, options);
};

