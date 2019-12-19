import commonHoc from 'Components/commonHoc';
import { exchange } from 'Redux/actions';
import { currenciesFromToSameSelector, exchagesValuesIsSetSelector } from 'Selectors/exchange';
import { StateType } from 'Redux/store';

import ExchangeButton from './ExchangeButton';

const mapStateToProps = (state: StateType): Record<string, any> => ({
  isActive: exchagesValuesIsSetSelector(state) && !currenciesFromToSameSelector(state),
});

const mapDispatchToProps = {
  exchange,
};

export default commonHoc(ExchangeButton, {
  mapStateToProps,
  mapDispatchToProps,
});
