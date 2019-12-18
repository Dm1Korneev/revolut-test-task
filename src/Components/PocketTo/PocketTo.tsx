import React from 'react';

import Pocket from 'Components/Pocket';
import CurrentRate from 'Components/CurrentRate';

function PocketTo(props) {
  return (
    <Pocket
      {...props}
      valuePrefix="+"
      inputValueLabel="Receive amount"
      selectCurrencyLabel="Receive currency"
    >
      <CurrentRate reverse />
    </Pocket>
  );
}

export default PocketTo;
