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
      {`${getCurrencySymbol(currencyFrom)}1 = ${getCurrencySymbol(currencyTo)}${currentRate.toFixed(4)}`}
    </span>
  );
}

CurrentRate.propTypes = propTypes;

export default CurrentRate;
