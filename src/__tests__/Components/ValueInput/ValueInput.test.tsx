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

  test('renders component with empty value', () => {
    const propsLocal = { ...props, value: null };
    const { asFragment } = render(<ValueInput {...propsLocal} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders component with 0 value', () => {
    const propsLocal = { ...props, value: 0 };
    const { asFragment } = render(<ValueInput {...propsLocal} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('change value', () => {
    const { getByRole } = render(<ValueInput {...props} />);
    fireEvent.change(getByRole('textbox'), { target: { value: '200.01', valueAsNumber: 200.01 } });
    expect(changeValue).toHaveBeenCalledWith(200.01);
  });

  test('change value to null when input is clear', () => {
    const { getByRole } = render(<ValueInput {...props} />);
    fireEvent.change(getByRole('textbox'), { target: { value: '', valueAsNumber: Number.NaN } });
    expect(changeValue).toHaveBeenCalledWith(null);
  });

  test('change value positive when inter negarive', () => {
    const { getByRole } = render(<ValueInput {...props} />);
    fireEvent.change(getByRole('textbox'), { target: { value: '-5', valueAsNumber: -5 } });
    expect(changeValue).toHaveBeenCalledWith(5);
  });
});
