import commonHoc from 'Components/commonHoc';
import { exchange } from 'Redux/actions';

import ExchangeButton from './ExchangeButton';

const mapDispatchToProps = {
  exchange,
};

export default commonHoc(ExchangeButton, {
  mapDispatchToProps,
});
