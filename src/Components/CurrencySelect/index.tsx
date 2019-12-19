import React, { FC } from 'react';

import { Select } from './CurrencySelect.styled';

type Props = {
  currency: string;
  currencies: Array<string>;
  setPocketCurrency: (currency: string) => void;
  label: string;
}

const CurrencySelect: FC<Props> = (props): JSX.Element => {
  const {
    currencies, currency, setPocketCurrency, label,
  } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setPocketCurrency(event.target.value);
  };

  return (
    <Select value={currency} onChange={onChangeHandler} aria-label={label}>
      {currencies.map((element) => <option key={element} value={element}>{element}</option>)}
    </Select>
  );
};

export default CurrencySelect;
