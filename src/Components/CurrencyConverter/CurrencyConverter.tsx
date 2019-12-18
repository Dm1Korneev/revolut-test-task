import React, { Component } from 'react';

import { RATES_RELOAD_PERIOD } from 'Constants';

import PocketFrom from 'Components/PocketFrom';
import PocketTo from 'Components/PocketTo';
import CurrentRate from 'Components/CurrentRate';
import ExchangeButton from 'Components/ExchangeButton';
import Loader from 'Components/Loader';
import ChangePocketsButton from 'Components/ChangePocketsButton';

import {
  BlockFrom, BlockTo, ChangePocketsContainer, Container, CurrentRateContainer, Title,
} from './CurrencyConverter.styled';

type Props = {
  getRates: Function;
  getPockets: Function;
  isBusy: boolean;
}

class CurrencyConverter extends Component<Props> {
  interval: number;

  constructor(props) {
    super(props);

    this.interval = undefined;
  }

  componentDidMount(): void {
    const { getRates, getPockets } = this.props;

    getPockets();
    getRates();
    this.interval = setInterval(getRates, RATES_RELOAD_PERIOD);
  }

  componentWillUnmount(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render(): JSX.Element {
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
              <ChangePocketsContainer>
                <ChangePocketsButton />
              </ChangePocketsContainer>
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

export default CurrencyConverter;
