import { createSelector } from '@reduxjs/toolkit';
import { StateType } from 'Redux/store';

const pocketsSelector = (state: StateType): StateType['pockets'] => state.pockets;

export const pocketValueSelector = (state: StateType, currency: string): number => createSelector(
  pocketsSelector,
  (pockets) => pockets[currency],
)(state);
