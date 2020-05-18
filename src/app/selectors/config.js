import { createSelector } from 'reselect';

const getVersion = state => state.config.version;
export const getThemeSelector = state => state.config.theme;

export const versionSelector = createSelector(getVersion, state => state);

export const themeSelector = createSelector(getThemeSelector, theme => theme);