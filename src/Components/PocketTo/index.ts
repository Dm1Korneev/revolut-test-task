import commonHoc from 'Components/commonHoc';
import { changeReceiveValue, setPocketTo } from 'Redux/actions';
import {
  pocketToCurrencySelector, pocketToValueSelector, receiveValueSelector,
} from 'Selectors/exchange';
import { currenciesSelector } from 'Selectors/currencies';
import { StateType } from 'Redux/store';

import PocketTo from './PocketTo';

const mapStateToProps = (state: StateType): Record<string, any> => ({
  currency: pocketToCurrencySelector(state),
  valueHave: pocketToValueSelector(state),
  currencies: currenciesSelector(),
  value: receiveValueSelector(state),
});

const mapDispatchToProps = {
  setPocketCurrency: setPocketTo,
  changeValue: changeReceiveValue,
};

export default commonHoc(PocketTo, {
  mapStateToProps,
  mapDispatchToProps,
});
