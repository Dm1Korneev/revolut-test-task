import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { StateType } from 'Redux/store';

type Params = {
  mapStateToProps?: (state: StateType, props?: any) => Record<string, any>;
  mapDispatchToProps?: Record<string, any>;
};
const commonHoc = (component: ComponentType<any>, params: Params = {}): ComponentType => {
  const {
    mapStateToProps = null,
    mapDispatchToProps = null,
  } = params;

  const isConnected = mapStateToProps || mapDispatchToProps;

  let ConnectedComponent = component;

  if (isConnected) {
    const dispatchMapper = !mapDispatchToProps ? null
      : (dispatch: Dispatch): Record<string, any> => bindActionCreators(mapDispatchToProps, dispatch);

    ConnectedComponent = connect(mapStateToProps, dispatchMapper)(component);
  }

  return ConnectedComponent;
};

export default commonHoc;
