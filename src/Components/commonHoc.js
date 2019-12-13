import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const commonHoc = (Component, params = {}) => {
  const {
    mapStateToProps = null,
    mapDispatchToProps = null,
  } = params;

  const isConnected = mapStateToProps || mapDispatchToProps;

  let ConnectedComponent = Component;

  if (isConnected) {
    const dispatchMapper = !mapDispatchToProps ? null
      : (dispatch) => bindActionCreators(mapDispatchToProps, dispatch);

    ConnectedComponent = connect(mapStateToProps, dispatchMapper)(Component);
  }

  return ConnectedComponent;
};

export default commonHoc;
