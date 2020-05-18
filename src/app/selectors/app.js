import { createSelector } from 'reselect';

const getError = state => state.app;

export const errorSelector = createSelector(getError, error => error);
