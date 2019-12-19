import { Action, createAction } from 'redux-actions';

const payloadCreator = (params: {[x: string]: any} = {}): {[x: string]: any} | void => {
  if (Object.keys(params).length) {
    return { ...params };
  }
  return undefined;
};

export const getRequestAction = (
  name: string,
  params: {[x: string]: any} = {},
): Action<any> => createAction(`${name}_REQUEST`, payloadCreator)(params);

export const getSuccessAction = (
  name: string,
  params: {[x: string]: any} = {},
): Action<any> => createAction(`${name}_SUCCESS`, payloadCreator)(params);

export const getFailureAction = (
  name: string,
  params: {[x: string]: any} = {},
): Action<any> => createAction(`${name}_FAILURE`, payloadCreator)(params);
