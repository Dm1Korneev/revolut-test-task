import Container from 'Components/ChangePocketsButton';

jest.mock('Components/ChangePocketsButton/ChangePocketsButton', () => 'ChangePocketsButtonComponent');
jest.mock('Components/commonHoc', () => (...args) => args);
jest.mock('Redux/actions', () => ({
  changePockets: 'changePockets',
}));

describe('ChangePocketsButton container', () => {
  test('container get current data from store', () => {
    const [componentName, { mapDispatchToProps }] = Container;
    expect(componentName).toBe('ChangePocketsButtonComponent');
    expect(mapDispatchToProps).toStrictEqual({
      changePockets: 'changePockets',
    });
  });
});
