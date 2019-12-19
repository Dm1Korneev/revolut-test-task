import commonHoc from 'Components/commonHoc';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

const spyConnect = jest.spyOn(ReactRedux, 'connect').mockImplementation(() => () => 'ConnectedComponent');
const spyBindActionCreators = jest.spyOn(Redux, 'bindActionCreators')
  .mockImplementation((mapDispatchToProps, dispatch) => ({ mapDispatchToProps, dispatch }));

describe('commonHoc container', () => {
  beforeEach(() => jest.resetModules());

  afterEach(() => {
    spyConnect.mockClear();
    spyBindActionCreators.mockClear();
  });

  test('should return component', () => {
    const params = {
      mapStateToProps: 'mapStateToProps',
      mapDispatchToProps: 'mapDispatchToProps',
    };
    expect(commonHoc('Component', params)).toBe('ConnectedComponent');
    expect(spyConnect.mock.calls[0][0]).toBe('mapStateToProps');
    expect(spyConnect.mock.calls[0][1]('dispatch')).toStrictEqual({
      dispatch: 'dispatch',
      mapDispatchToProps: 'mapDispatchToProps',
    });
  });

  test('should set mapStateToProps to null if not passed', () => {
    const params = {
      mapDispatchToProps: 'mapDispatchToProps',
    };
    expect(commonHoc('Component', params)).toBe('ConnectedComponent');
    expect(spyConnect.mock.calls[0][0]).toBe(null);
    expect(spyConnect.mock.calls[0][1]('dispatch')).toStrictEqual({
      dispatch: 'dispatch',
      mapDispatchToProps: 'mapDispatchToProps',
    });
  });

  test('should not call bindActionCreators when mapDispatchToProps not passed', () => {
    const params = {
      mapStateToProps: 'mapStateToProps',
    };
    expect(commonHoc('Component', params)).toBe('ConnectedComponent');
    expect(spyBindActionCreators).not.toHaveBeenCalled();
  });

  test('should not connect component when maps not passed', () => {
    expect(commonHoc('Component')).toBe('Component');
    expect(spyConnect).not.toHaveBeenCalled();
    expect(spyBindActionCreators).not.toHaveBeenCalled();
  });
});
