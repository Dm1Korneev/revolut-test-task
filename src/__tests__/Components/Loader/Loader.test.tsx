import React from 'react';
import { render } from '@testing-library/react';
import Loader from 'Components/Loader/';

describe('Loader component', () => {
  test('renders the component', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
