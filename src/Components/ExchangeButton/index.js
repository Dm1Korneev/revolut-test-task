import commonHoc from 'Components/commonHoc';
import { exchange } from 'Redux/actions';
import { exchagesValuesIsSetSelector } from 'Selectors/session';

import ExchangeButton from './ExchangeButton';

const mapStateToProps = (state) => ({
  isActive: exchagesValuesIsSetSelector(state),
});

const mapDispatchToProps = {
  exchange,
};

export default commonHoc(ExchangeButton, {
  mapStateToProps,
  mapDispatchToProps,
});
