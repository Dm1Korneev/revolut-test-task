import React from 'react';

import Pocket from 'Components/Pocket';

function PocketFrom(props) {
  return (
    <Pocket
      {...props}
      valuePrefix="-"
      inputValueLAbel="Write off amount"
      selectCurrencyLabel="Write off currency"
    />
  );
}

export default PocketFrom;
