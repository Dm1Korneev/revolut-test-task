import React, { FC, ReactNode } from 'react';

import CurrencySelect from 'Components/CurrencySelect';
import ValueInput from 'Components/ValueInput';
import PocketValue from './PocketValue';
import { Container, InfoLine, InputsLine } from './Pocket.styled';

export type Props = {
  currency: string;
  value?: number | null;
  valueHave?: number;
  currencies: Array<string>;
  setPocketCurrency: () => void;
  changeValue: () => void;
  valuePrefix?: string;
  inputValueLabel: string;
  selectCurrencyLabel: string;
  children?: ReactNode;
}

const Pocket: FC<Props> = (props): JSX.Element => {
  const {
    currency, value = null, valueHave = 0, currencies, setPocketCurrency,
    children, changeValue, valuePrefix, selectCurrencyLabel, inputValueLabel,
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
          label={inputValueLabel}
        />
      </InputsLine>
      <InfoLine>
        <PocketValue value={valueHave} currency={currency} />
        {children}
      </InfoLine>
    </Container>
  );
};

export default Pocket;
