import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './ExchangeButton.styled';

const propTypes = {
  exchange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

function ExchangeButton(props) {
  const {
    exchange, isActive,
  } = props;

  return (
    <Button type="button" onClick={exchange} disabled={!isActive}>
      Exchange
    </Button>
  );
}

ExchangeButton.propTypes = propTypes;

export default ExchangeButton;
