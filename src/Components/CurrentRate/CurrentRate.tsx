import React from 'react';
import PropTypes from 'prop-types';

import { getCurrencySymbol } from 'Helpers';

const propTypes = {
  currentRate: PropTypes.number.isRequired,
  currencyFrom: PropTypes.string.isRequired,
  currencyTo: PropTypes.string.isRequired,
};

function CurrentRate(props) {
  const {
    currentRate, currencyFrom, currencyTo,
  } = props;

  return (
    <span>
      <small>{getCurrencySymbol(currencyFrom)}</small>
      {'1 = '}
      <small>{getCurrencySymbol(currencyTo)}</small>
      {currentRate.toFixed(4)}
    </span>
  );
}

CurrentRate.propTypes = propTypes;

export default CurrentRate;
