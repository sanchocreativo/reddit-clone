import { createSelector } from 'reselect';

const getConfig = state => state.home.config;

const getError = state => state.app;

export const getConfigSelector = createSelector(getConfig, config => config);

export const errorSelector = createSelector(getError, error => error);