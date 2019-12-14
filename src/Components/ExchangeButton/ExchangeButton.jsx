import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './ExchangeButton.styled';

const propTypes = {
  exchange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

function CurrentRate(props) {
  const {
    exchange, isActive,
  } = props;

  return (
    <Button type="button" onClick={exchange} disabled={!isActive}>
      Exchange
    </Button>
  );
}

CurrentRate.propTypes = propTypes;

export default CurrentRate;
