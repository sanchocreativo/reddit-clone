export const SHOW_GLOBAL_ERROR = 'SHOW_GLOBAL_ERROR';

export const showGlobalError = (showError, status, key) => ({
    type: SHOW_GLOBAL_ERROR,
    payload: {
        showError,
        status,
        key
    }
});