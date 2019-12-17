import React from 'react';
import { render } from '@testing-library/react';
import PocketValue from 'Components/Pocket/PocketValue';

import * as Helpers from 'Helpers';

describe('PocketValue component', () => {
  const props = {
    currency: 'GBP',
    value: 0.09,
  };

  test('renders the component', () => {
    const spy = jest.spyOn(Helpers, 'getCurrencySymbol').mockImplementation(() => '£');

    const { asFragment } = render(<PocketValue {...props} />);
    expect(asFragment()).toMatchSnapshot();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
