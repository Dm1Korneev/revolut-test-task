import React, { FC } from 'react';

import Pocket, { Props as PocketProps } from 'Components/Pocket';
import CurrentRate from 'Components/CurrentRate';

const PocketTo: FC<PocketProps> = (props: PocketProps): JSX.Element => (
  <Pocket
    {...props}
    valuePrefix="+"
    inputValueLabel="Receive amount"
    selectCurrencyLabel="Receive currency"
  >
    <CurrentRate reverse />
  </Pocket>
);

export default PocketTo;
