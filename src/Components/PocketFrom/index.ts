import commonHoc from 'Components/commonHoc';
import { changeWriteOffValue, setPocketFrom } from 'Redux/actions';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, writeOffValueSelector,
} from 'Selectors/exchange';
import { currenciesSelector } from 'Selectors/currencies';
import { StateType } from 'Redux/store';

import PocketFrom from './PocketFrom';

const mapStateToProps = (state: StateType): Record<string, any> => ({
  currency: pocketFromCurrencySelector(state),
  valueHave: pocketFromValueSelector(state),
  currencies: currenciesSelector(),
  value: writeOffValueSelector(state),
});

const mapDispatchToProps = {
  setPocketCurrency: setPocketFrom,
  changeValue: changeWriteOffValue,
};

export default commonHoc(PocketFrom, {
  mapStateToProps,
  mapDispatchToProps,
});
