import React from 'react';
import { render } from '@testing-library/react';
import App from 'Components/App/';

jest.mock('Components/CurrencyConverter', () => global.mockComponent('CurrencyConverter'));

describe('App component', () => {
  test('renders the component', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
