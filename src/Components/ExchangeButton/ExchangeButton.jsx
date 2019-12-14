import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  exchange: PropTypes.func.isRequired,
};

function CurrentRate(props) {
  const {
    exchange,
  } = props;

  return (
    <button type="button" onClick={exchange}>
      Exchange
    </button>
  );
}

CurrentRate.propTypes = propTypes;

export default CurrentRate;
