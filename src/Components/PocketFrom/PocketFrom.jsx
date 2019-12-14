import React from 'react';

import Pocket from 'Components/Pocket';

function PocketFrom(props) {
  return (
    <Pocket
      {...props}
      valuePrefix="-"
    />
  );
}

export default PocketFrom;
