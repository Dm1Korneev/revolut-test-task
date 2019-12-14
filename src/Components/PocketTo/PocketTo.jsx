import React from 'react';

import Pocket from 'Components/Pocket';
import CurrentRate from 'Components/CurrentRate';

function PocketTo(props) {
  return (
    <Pocket
      {...props}
      valuePrefix="+"
      cildren={<CurrentRate reverse />}
    />
  );
}

export default PocketTo;
