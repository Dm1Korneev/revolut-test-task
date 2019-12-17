import React from 'react';
import { render } from '@testing-library/react';
import PocketFrom from 'Components/PocketFrom/PocketFrom';

jest.mock('Components/Pocket', () => global.mockComponent('Pocket'));

describe('PocketFrom component', () => {
  const props = {
    test: 'test',
  };

  test('renders the component', () => {
    const { asFragment } = render(<PocketFrom {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
