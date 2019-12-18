import React from 'react';
import PropTypes from 'prop-types';

import { getCurrencySymbol } from 'Helpers';

const defaultProps = {
  value: 0,
};

const propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number,
};

function PocketValue(props) {
  const {
    currency, value,
  } = props;

  return (
    <span>
      {'You have '}
      <small>{getCurrencySymbol(currency)}</small>
      {value.toFixed(2)}
    </span>
  );
}

PocketValue.propTypes = propTypes;
PocketValue.defaultProps = defaultProps;

export default PocketValue;
