import commonHoc from 'Components/commonHoc';
import { exchange } from 'Redux/actions';
import { currenciesFromToSameSelector, exchagesValuesIsSetSelector } from 'Selectors/exchange';

import ExchangeButton from './ExchangeButton';

const mapStateToProps = (state) => ({
  isActive: exchagesValuesIsSetSelector(state) && !currenciesFromToSameSelector(state),
});

const mapDispatchToProps = {
  exchange,
};

export default commonHoc(ExchangeButton, {
  mapStateToProps,
  mapDispatchToProps,
});
