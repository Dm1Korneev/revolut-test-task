import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RATES_RELOAD_PERIOD } from 'Constants';

import PocketFrom from 'Components/PocketFrom';
import PocketTo from 'Components/PocketTo';
import CurrentRate from 'Components/CurrentRate';
import ExchangeButton from 'Components/ExchangeButton';
import Loader from 'Components/Loader';

import {
  BlockFrom, BlockTo, Container, CurrentRateContainer, Title,
} from './CurrencyConverter.styled';

const propTypes = {
  getPockets: PropTypes.func.isRequired,
  getRates: PropTypes.func.isRequired,
  isBusy: PropTypes.bool.isRequired,
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
    const { isBusy } = this.props;

    return (
      <Container>
        <Title>Currency exchange</Title>
        {isBusy ? <Loader /> : (
          <>
            <BlockFrom>
              <PocketFrom />
              <CurrentRateContainer>
                <CurrentRate />
              </CurrentRateContainer>
            </BlockFrom>
            <BlockTo>
              <PocketTo />
              <ExchangeButton />
            </BlockTo>
          </>
        )}
      </Container>
    );
  }
}

CurrencyConverter.propTypes = propTypes;

export default CurrencyConverter;
