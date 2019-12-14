import commonHoc from 'Components/commonHoc';
import { pocketFromCurrencySelector, pocketToCurrencySelector, rateSelector } from 'Selectors/session';

import CurrentRate from './CurrentRate';

const mapStateToProps = (state, props) => {
  let currencyFrom;
  let currencyTo;

  if (props.reverse) {
    currencyFrom = pocketToCurrencySelector(state);
    currencyTo = pocketFromCurrencySelector(state);
  } else {
    currencyFrom = pocketFromCurrencySelector(state);
    currencyTo = pocketToCurrencySelector(state);
  }
  const currentRate = rateSelector(state, currencyFrom, currencyTo);

  return {
    currentRate, currencyFrom, currencyTo,
  };
};

export default commonHoc(CurrentRate, {
  mapStateToProps,
});
