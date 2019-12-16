import commonHoc from 'Components/commonHoc';
import { getPockets, getRates } from 'Redux/actions';
import { getRatesLoadedSelector } from 'Selectors/loaded';

import CurrencyConverter from './CurrencyConverter';

const mapStateToProps = (state) => ({
  isBusy: !getRatesLoadedSelector(state),
});

const mapDispatchToProps = {
  getRates,
  getPockets,
};

export default commonHoc(CurrencyConverter, {
  mapStateToProps,
  mapDispatchToProps,
});
