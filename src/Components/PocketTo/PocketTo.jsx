import React from 'react';

import Pocket from 'Components/Pocket';
import CurrentRate from 'Components/CurrentRate';

function PocketTo(props) {
  return (
    <Pocket
      {...props}
      valuePrefix="+"
      cildren={<CurrentRate reverse />}
      inputValueLAbel="Receive amount"
      selectCurrencyLabel="Receive currency"
    />
  );
}

export default PocketTo;
