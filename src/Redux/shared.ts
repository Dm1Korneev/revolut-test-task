import { createAction } from 'redux-actions';

const payloadCreator = ({ ...params }) => {
  if (Object.keys(params).length) {
    return { ...params };
  }
  return undefined;
};

export const getRequestAction = (name: string, { ...params }) => createAction(`${name}_REQUEST`, payloadCreator)({ ...params });

export const getSuccessAction = (name: string, { ...params }) => createAction(`${name}_SUCCESS`, payloadCreator)({ ...params });

export const getFailureAction = (name: string, { ...params }) => createAction(`${name}_FAILURE`, payloadCreator)({ ...params });
