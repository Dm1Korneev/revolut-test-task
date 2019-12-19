import React, { FC } from 'react';

import { Button } from './ExchangeButton.styled';

type Props = {
  exchange: () => void;
  isActive: boolean;
}

const ExchangeButton: FC<Props> = (props): JSX.Element => {
  const {
    exchange, isActive,
  } = props;

  return (
    <Button type="button" onClick={exchange} disabled={!isActive}>
      Exchange
    </Button>
  );
};

export default ExchangeButton;
