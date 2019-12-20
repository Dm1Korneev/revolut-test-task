import { createReducer } from '@reduxjs/toolkit';

import { setPockets } from 'Redux/actions';

export type PocketsState = {[id: string]: number}

const defaultStore: PocketsState = {};

export default createReducer(defaultStore, (builder) => builder
  .addCase(setPockets, (state, action) => ({ ...state, ...action.payload.pockets })));
