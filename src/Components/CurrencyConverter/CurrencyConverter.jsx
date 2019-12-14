import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RATES_RELOAD_PERIOD } from 'Constants';

import PocketFrom from 'Components/PocketFrom';
import PocketTo from 'Components/PocketTo';
import CurrentRate from 'Components/CurrentRate';
import ExchangeButton from 'Components/ExchangeButton';

import { Title } from './CurrencyConverter.styled';

const propTypes = {
  getPockets: PropTypes.func.isRequired,
  getRates: PropTypes.func.isRequired,
};

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    this.interval = undefined;
  }

  componentDidMount() {
    const { getRates, getPockets } = this.props;

    getPockets();
    getRates();
    this.interval = setInterval(getRates, RATES_RELOAD_PERIOD);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <>
        <Title>Currency exchange</Title>
        <CurrentRate />
        <ExchangeButton />
        <PocketFrom />
        <PocketTo />
      </>
    );
  }
}

CurrencyConverter.propTypes = propTypes;

export default CurrencyConverter;
