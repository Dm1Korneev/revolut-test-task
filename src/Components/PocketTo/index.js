import commonHoc from 'Components/commonHoc';
import { changeReceiveValue, setPocketTo } from 'Redux/actions';
import {
  currenciesSelector, pocketToCurrencySelector, pocketToValueSelector, receiveValueSelector,
} from 'Selectors/session';

import PocketTo from './PocketTo';

const mapStateToProps = (state) => ({
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
