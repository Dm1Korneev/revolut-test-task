// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { Saga, runSaga, stdChannel } from 'redux-saga';
import '@testing-library/jest-dom/extend-expect';
import EventEmitter from 'events';
import { PayloadAction } from '@reduxjs/toolkit';

const myGlobal = global as any;
myGlobal.mockComponent = (componentName: string) => (props: any): JSX.Element => {
  const mockProps: {[id: string]: any} = {};
  Object.keys(props)
    .filter((key) => key !== 'children')
    .forEach((key) => {
      const value = JSON.stringify(props[key]);
      mockProps[`test-prop-${key.toLowerCase()}`] = value;
    });
  return (<div data-originalcomponent={componentName} {...mockProps}>{props.children}</div>);
};

type Dispatched = Array<PayloadAction>;
type Emit = (action: PayloadAction) => void;
myGlobal.recordSaga = async (saga: Saga, initialAction: PayloadAction): Promise<{dispatched: Dispatched; emit: Emit}> => {
  const dispatched: Dispatched = [];
  const channel = stdChannel();
  const emitter = new EventEmitter();
  emitter.on('event', (action) => {
    channel.put(action);
  });
  await runSaga({
    dispatch: (action: PayloadAction): void => {
      dispatched.push(action);
    },
    channel,
    getState: () => ({}),
  },
  saga,
  initialAction).result;

  const emit = (action: PayloadAction): void => {
    emitter.emit('event', action);
  };

  return { dispatched, emit };
};
