// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { Saga, runSaga, stdChannel } from 'redux-saga';
import '@testing-library/jest-dom/extend-expect';

const EventEmitter = require('events');

global.mockComponent = (componentName: string) => (props: any): JSX.Element => {
  const mockProps = {};
  Object.keys(props)
    .filter((key) => key !== 'children')
    .forEach((key) => {
      const value = JSON.stringify(props[key]);
      mockProps[`test-prop-${key.toLowerCase()}`] = value;
    });
  return (<div originalcomponent={componentName} {...mockProps}>{props.children}</div>);
};

global.recordSaga = async (saga: Saga, initialAction: {payload?: any}) => {
  const dispatched = [];
  const channel = stdChannel();
  const emitter = new EventEmitter();
  emitter.on('event', (action) => {
    channel.put(action);
  });
  await runSaga({
    dispatch: (action) => dispatched.push(action),
    channel,
    getState: () => {},
  },
  saga,
  initialAction).done;

  const emit = (action) => {
    emitter.emit('event', action);
  };

  return { dispatched, emit };
};
