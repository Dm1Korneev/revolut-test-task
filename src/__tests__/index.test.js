
describe('app Entry Point - /src/index.jsx', () => {
  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('should render app without error', () => {
    expect(() => require('index.jsx')).not.toThrow();
  });
});
