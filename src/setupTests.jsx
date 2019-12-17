// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

global.mockComponent = (componentName) => (props) => {
  const mockProps = {};
  Object.keys(props)
    .filter((key) => key !== 'children')
    .forEach((key) => {
      const value = JSON.stringify(props[key]);
      mockProps[`test-prop-${key.toLowerCase()}`] = value;
    });
  return (<div originalcomponent={componentName} {...mockProps}>{props.children}</div>);
};
