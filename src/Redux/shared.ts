import { PayloadActionCreator, createAction } from '@reduxjs/toolkit';

export const getRequestAction = <P = void>(name: string): PayloadActionCreator<P> => createAction(`${name}_REQUEST`);

export const getSuccessAction = <P = void>(name: string): PayloadActionCreator<P> => createAction(`${name}_SUCCESS`);

export const getFailureAction = <P = void>(name: string): PayloadActionCreator<P> => createAction(`${name}_FAILURE`);

