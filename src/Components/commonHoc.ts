import { Component, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const commonHoc = (component: FC, params = {}): Component => {
  const {
    mapStateToProps = null,
    mapDispatchToProps = null,
  } = params;

  const isConnected = mapStateToProps || mapDispatchToProps;

  let ConnectedComponent = component;

  if (isConnected) {
    const dispatchMapper = !mapDispatchToProps ? null
      : (dispatch) => bindActionCreators(mapDispatchToProps, dispatch);

    ConnectedComponent = connect(mapStateToProps, dispatchMapper)(component);
  }

  return ConnectedComponent;
};

export default commonHoc;
