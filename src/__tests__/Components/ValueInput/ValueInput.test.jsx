import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ValueInput from 'Components/ValueInput/';

describe('ValueInput component', () => {
  const changeValue = jest.fn();
  const props = {
    valuePrefix: '+',
    value: 100.54,
    changeValue,
    label: 'Test label',
  };

  test('renders the component', () => {
    const { asFragment } = render(<ValueInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('change value', () => {
    const { getByRole } = render(<ValueInput {...props} />);
    fireEvent.change(getByRole('textbox'), { target: { value: '200.01', valueAsNumber: 200.01 } });
    expect(changeValue).toHaveBeenCalledWith(200.01);
  });
});
