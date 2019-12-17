import React from 'react';
import { render } from '@testing-library/react';
import PocketTo from 'Components/PocketTo/PocketTo';

jest.mock('Components/Pocket', () => global.mockComponent('Pocket'));
jest.mock('Components/CurrentRate', () => global.mockComponent('CurrentRate'));

describe('PocketTo component', () => {
  const props = {
    test: 'test',
  };

  test('renders the component', () => {
    const { asFragment } = render(<PocketTo {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
