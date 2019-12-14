import commonHoc from 'Components/commonHoc';
import { getPockets, getRates } from 'Redux/actions';

import CurrencyConverter from './CurrencyConverter';

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  getRates,
  getPockets,
};

export default commonHoc(CurrencyConverter, {
  mapStateToProps,
  mapDispatchToProps,
});
