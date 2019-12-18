import React from 'react';
import PropTypes from 'prop-types';

import { floorPlus } from 'Helpers';

import { Input, PrefixContainer } from './ValueInput.styled';

const defaultProps = {
  valuePrefix: '',
  value: 0,
};

const propTypes = {
  changeValue: PropTypes.func.isRequired,
  value: PropTypes.number,
  valuePrefix: PropTypes.string,
  label: PropTypes.string.isRequired,
};

function ValueInput(props) {
  const {
    changeValue, value, valuePrefix, label,
  } = props;

  const valueChangeHandler = (event) => {
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
}

ValueInput.propTypes = propTypes;
ValueInput.defaultProps = defaultProps;

export default ValueInput;
