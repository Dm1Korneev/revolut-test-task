import React from 'react';
import PropTypes from 'prop-types';

import { floorPlus, getCurrencySymbol } from 'Helpers';

import { Container } from './Pocket.styled';

const defaultProps = {
  value: 0,
  valueHave: 0,
  cildren: null,
  valuePrefix: '',
};

const propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number,
  valueHave: PropTypes.number,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setPocketCurrency: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  cildren: PropTypes.element,
  valuePrefix: PropTypes.string,
};

function Pocket(props) {
  const {
    currency, value, valueHave, currencies, setPocketCurrency, cildren, changeValue, valuePrefix,
  } = props;

  const valueChangeHandler = (event) => {
    let parseValue = Number(event.target.value);
    if (Number.isNaN(parseValue)) {
      return;
    }
    parseValue = parseValue < 0 ? -parseValue : parseValue;
    parseValue = floorPlus(parseValue);
    changeValue(parseValue);
  };

  const valuePrefixString = value === 0 ? '' : valuePrefix;

  return (
    <Container>
      <select value={currency} onChange={(event) => setPocketCurrency(event.target.value)}>
        {currencies.map((element) => <option key={element} value={element}>{element}</option>)}
      </select>
      {valuePrefixString}
      <input type="number" value={value} step="1" onChange={valueChangeHandler} />
      <span>{`You have ${getCurrencySymbol(currency)}${valueHave.toFixed(2)}`}</span>
      {cildren}
    </Container>
  );
}

Pocket.propTypes = propTypes;
Pocket.defaultProps = defaultProps;

export default Pocket;
