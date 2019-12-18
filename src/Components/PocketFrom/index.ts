import commonHoc from 'Components/commonHoc';
import { changeWriteOffValue, setPocketFrom } from 'Redux/actions';
import {
  pocketFromCurrencySelector, pocketFromValueSelector, writeOffValueSelector,
} from 'Selectors/exchange';
import { currenciesSelector } from 'Selectors/currencies';

import PocketFrom from './PocketFrom';

const mapStateToProps = (state) => ({
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
