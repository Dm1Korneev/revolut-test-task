import React, { FC } from 'react';

import { getCurrencySymbol } from 'Helpers';

type Props = {
  currentRate: number;
  currencyFrom: string;
  currencyTo: string;
}

const CurrentRate: FC<Props> = (props): JSX.Element => {
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
};

export default CurrentRate;
