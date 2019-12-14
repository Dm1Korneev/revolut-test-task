import React from 'react';
import PropTypes from 'prop-types';

import PocketValue from './PocketValue';
import ValueInput from './ValueInput';
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
};

function Pocket(props) {
  const {
    currency, value, valueHave, currencies, setPocketCurrency, cildren, changeValue, valuePrefix,
  } = props;

  return (
    <Container>
      <InputsLine>
        <select value={currency} onChange={(event) => setPocketCurrency(event.target.value)}>
          {currencies.map((element) => <option key={element} value={element}>{element}</option>)}
        </select>
        <ValueInput value={value} valuePrefix={valuePrefix} changeValue={changeValue} />
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
