import commonHoc from 'Components/commonHoc';
import { pocketFromCurrencySelector, pocketToCurrencySelector } from 'Selectors/exchange';
import { rateSelector } from 'Selectors/rates';
import { StateType } from 'Redux/store';

import CurrentRate from './CurrentRate';

type Props = {
  reverse?: boolean;
}
const mapStateToProps = (state: StateType, props: Props): Record<string, any> => {
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
