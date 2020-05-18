import { CHANGE_CHILD_ROUTE, GO_BACK, CHANGE_TITLE_DESCRIPTION } from '../actions/config';
import { innerRoutes } from '../routes';

const initialState = {
    fetching: false,
    currentChildRoute: innerRoutes[0] || { title: {}, subTitle: {} },
    goBack: false,
    title: '',
    subtitle: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHILD_ROUTE: {
            return {
                ...state,
                fetching: false,
                currentChildRoute: action.payload ? action.payload.childRoute : innerRoutes[0]
            };
        }
        case GO_BACK: {
            return {
                ...state,
                goBack: action.payload.goBack,
                route: action.payload.route
            };
        }
        case CHANGE_TITLE_DESCRIPTION: {
            return {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle
            };
        }

        default:
            return state;
    }
};
