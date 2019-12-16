import commonHoc from 'Components/commonHoc';
import { getPockets, getRates } from 'Redux/actions';
import { getRatesLoadingSelector } from 'Selectors/loading';

import CurrencyConverter from './CurrencyConverter';

const mapStateToProps = (state) => ({
  isBusy: getRatesLoadingSelector(state),
});

const mapDispatchToProps = {
  getRates,
  getPockets,
};

export default commonHoc(CurrencyConverter, {
  mapStateToProps,
  mapDispatchToProps,
});
