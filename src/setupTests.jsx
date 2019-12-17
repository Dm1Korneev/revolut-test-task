// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

global.mockComponent = (componentName) => (props) => (
  <div originalcomponent={componentName} {...props}>{props.children}</div>
);
