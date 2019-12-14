import { CURRENCIES_RATE_API_ID, CURRENCIES_RATE_API_URL } from 'Constants';
import { pockets } from './dummyData';

function parseJSON(response) {
  return new Promise((resolve) => response.json().then((result) => resolve({
    status: response.status,
    ok: response.ok,
    result,
  })));
}

function apiCall(URI, optionsParams) {
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
      .then((response) => {
        if (response.ok) {
          return resolve(response.result);
        }
        return reject(response.result);
      });
  });
}

export const getPockets = () => new Promise((resolve) => resolve(pockets));

export const getRates = () => {
  const uri = `${CURRENCIES_RATE_API_URL}/latest.json?app_id=${CURRENCIES_RATE_API_ID}`;
  const options = {
    method: 'GET',
    mode: 'cors',
  };

  return apiCall(uri, options);
};

