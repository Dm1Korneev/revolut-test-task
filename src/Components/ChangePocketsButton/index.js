import commonHoc from 'Components/commonHoc';
import { changePockets } from 'Redux/actions';

import ChangePocketsButton from './ChangePocketsButton';

const mapDispatchToProps = {
  changePockets,
};

export default commonHoc(ChangePocketsButton, {
  mapDispatchToProps,
});
