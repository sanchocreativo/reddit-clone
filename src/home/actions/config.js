export const CHANGE_CHILD_ROUTE = 'CHANGE_CHILD_ROUTE';
export const GO_BACK = 'GO_BACK';

export const CHANGE_TITLE_DESCRIPTION = 'CHANGE_TITLE_DESCRIPTION';

export const changeConfigChildRoute = (childRoute) => {
    if (childRoute) {
        return ({
            type: CHANGE_CHILD_ROUTE,
            payload: {
                childRoute
            }
        })
    } else {
        return ({
            type: CHANGE_CHILD_ROUTE
        })
    }
};

export const changeGoBack = (goBack = false, route = "") => {
    return {
        type: GO_BACK,
        payload: {
            goBack,
            route
        }
    }
};

export const changeHomeTitleAndDescription = (title = "", subtitle = "") => {
    return {
        type: CHANGE_TITLE_DESCRIPTION,
        payload: {
            title,
            subtitle
        }
    }
};
