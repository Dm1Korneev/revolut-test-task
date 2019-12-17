import React from 'react';
import { render } from '@testing-library/react';
import Component from 'Components/CurrentRate/CurrentRate';

describe('CurrentRate component', () => {
  test('renders the component', () => {
    const props = {
      currentRate: 10.6578,
      currencyFrom: 'USD',
      currencyTo: 'EUR',
    };

    const { asFragment } = render(<Component {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
