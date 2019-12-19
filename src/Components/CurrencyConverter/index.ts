import commonHoc from 'Components/commonHoc';
import { getPockets, getRates } from 'Redux/actions';
import { getRatesLoadedSelector } from 'Selectors/loaded';
import { StateType } from 'Redux/store';

import CurrencyConverter from './CurrencyConverter';

const mapStateToProps = (state: StateType): Record<string, any> => ({
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
