import React from 'react';
import PropTypes from 'prop-types';

import CurrencySelect from 'Components/CurrencySelect';
import ValueInput from 'Components/ValueInput';
import PocketValue from './PocketValue';
import { Container, InfoLine, InputsLine } from './Pocket.styled';

const defaultProps = {
  value: null,
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
  inputValueLAbel: PropTypes.string.isRequired,
  selectCurrencyLabel: PropTypes.string.isRequired,
};

function Pocket(props) {
  const {
    currency, value, valueHave, currencies, setPocketCurrency,
    cildren, changeValue, valuePrefix, selectCurrencyLabel, inputValueLAbel,
  } = props;

  return (
    <Container>
      <InputsLine>
        <CurrencySelect
          currency={currency}
          currencies={currencies}
          setPocketCurrency={setPocketCurrency}
          label={selectCurrencyLabel}
        />
        <ValueInput
          value={value}
          valuePrefix={valuePrefix}
          changeValue={changeValue}
          label={inputValueLAbel}
        />
      </InputsLine>
      <InfoLine>
        <PocketValue value={valueHave} currency={currency} />
        {cildren}
      </InfoLine>
    </Container>
  );
}

Pocket.propTypes = propTypes;
Pocket.defaultProps = defaultProps;

export default Pocket;
