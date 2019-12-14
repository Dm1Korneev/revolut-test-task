import { createSelector } from 'reselect';

const pocketsSelector = (state) => state.pockets;

export const pocketValueSelector = (state, currency) => createSelector(
  pocketsSelector,
  (pockets) => pockets[currency],
)(state);
