import commonHoc from 'Components/commonHoc';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

const spyConnect = jest.spyOn(ReactRedux, 'connect').mockImplementation((() => (): string => 'ConnectedComponent') as any);
const spyBindActionCreators = jest.spyOn(Redux, 'bindActionCreators')
  .mockImplementation(((mapDispatchToProps: any, dispatch: any): any => ({ mapDispatchToProps, dispatch })) as any);

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
    expect(commonHoc('Component' as any, params as any)).toBe('ConnectedComponent');
    expect(spyConnect.mock.calls[0][0]).toBe('mapStateToProps');
    const connector = spyConnect.mock.calls[0][1] as any;
    expect(connector('dispatch')).toStrictEqual({
      dispatch: 'dispatch',
      mapDispatchToProps: 'mapDispatchToProps',
    });
  });

  test('should set mapStateToProps to null if not passed', () => {
    const params = {
      mapDispatchToProps: 'mapDispatchToProps',
    };
    expect(commonHoc('Component' as any, params as any)).toBe('ConnectedComponent');
    expect(spyConnect.mock.calls[0][0]).toBe(null);
    const connector = spyConnect.mock.calls[0][1] as any;
    expect(connector('dispatch')).toStrictEqual({
      dispatch: 'dispatch',
      mapDispatchToProps: 'mapDispatchToProps',
    });
  });

  test('should not call bindActionCreators when mapDispatchToProps not passed', () => {
    const params = {
      mapStateToProps: 'mapStateToProps',
    };
    expect(commonHoc('Component' as any, params as any)).toBe('ConnectedComponent');
    expect(spyBindActionCreators).not.toHaveBeenCalled();
  });

  test('should not connect component when maps not passed', () => {
    expect(commonHoc('Component' as any)).toBe('Component');
    expect(spyConnect).not.toHaveBeenCalled();
    expect(spyBindActionCreators).not.toHaveBeenCalled();
  });
});
