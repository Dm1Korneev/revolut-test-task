import React, { FC } from 'react';

import { floorPlus } from 'Helpers';

import { Input, PrefixContainer } from './ValueInput.styled';

type Props = {
  changeValue: (value: number | null) => void;
  value: number | null;
  valuePrefix?: string;
  label: string;
}

const ValueInput: FC<Props> = (props): JSX.Element => {
  const {
    changeValue, value, valuePrefix = '', label,
  } = props;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { valueAsNumber, value: valueFromInput } = event.target;
    if (valueFromInput === '') {
      changeValue(null);
    }
    if (Number.isNaN(valueAsNumber)) {
      return;
    }
    let newValue = valueAsNumber < 0 ? -valueAsNumber : valueAsNumber;
    newValue = floorPlus(newValue);
    changeValue(newValue);
  };

  const valueForInput = value === null ? '' : value;
  const valuePrefixString = value === 0 ? '' : valuePrefix;

  return (
    <div>
      <PrefixContainer>{valuePrefixString}</PrefixContainer>
      <Input type="number" value={valueForInput} step="0.01" onChange={valueChangeHandler} aria-label={label} />
    </div>
  );
};

export default ValueInput;
