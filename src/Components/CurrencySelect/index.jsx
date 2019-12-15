import React from 'react';
import PropTypes from 'prop-types';

import { Select } from './CurrencySelect.styled';

const propTypes = {
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setPocketCurrency: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

function CurrencySelect(props) {
  const {
    currencies, currency, setPocketCurrency, label,
  } = props;

  return (
    <Select value={currency} onChange={(event) => setPocketCurrency(event.target.value)} aria-label={label}>
      {currencies.map((element) => <option key={element} value={element}>{element}</option>)}
    </Select>
  );
}

CurrencySelect.propTypes = propTypes;

export default CurrencySelect;
