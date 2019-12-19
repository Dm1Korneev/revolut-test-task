import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ChangePocketsButton from 'Components/ChangePocketsButton/ChangePocketsButton';

describe('ChangePocketsButton component', () => {
  const changePockets = jest.fn();
  const props = {
    changePockets,
  };

  test('renders the component', () => {
    const { asFragment } = render(<ChangePocketsButton {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('change value', () => {
    const { getByRole } = render(<ChangePocketsButton {...props} />);
    fireEvent.click(getByRole('button'));
    expect(changePockets).toHaveBeenCalledTimes(1);
  });
});
