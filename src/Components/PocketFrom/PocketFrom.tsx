import React, { FC } from 'react';

import Pocket, { Props as PocketProps } from 'Components/Pocket';

const PocketFrom: FC<PocketProps> = (props: PocketProps): JSX.Element => (
  <Pocket
    {...props}
    valuePrefix="-"
    inputValueLabel="Write off amount"
    selectCurrencyLabel="Write off currency"
  />
);

export default PocketFrom;
