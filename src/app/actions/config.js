export const SET_VERSION = 'SET_VERSION';
export const SET_THEME = 'SET_THEME';

export const setVersion = (version) => ({
    type: SET_VERSION,
    payload: {
        version
    }
});

export const setThemeWeb = theme => ({
    type: SET_THEME,
    payload: {
        theme
    }
});