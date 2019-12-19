import React, { FC } from 'react';

import { getCurrencySymbol } from 'Helpers';

type Props = {
  currency: string;
  value: number;
}

const PocketValue: FC<Props> = (props): JSX.Element => {
  const {
    currency,
    value,
  } = props;

  return (
    <span>
      {'You have '}
      <small>{getCurrencySymbol(currency)}</small>
      {value.toFixed(2)}
    </span>
  );
};

export default PocketValue;
