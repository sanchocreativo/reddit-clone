import {
    IS_READEN,
} from '../actions/readStatus';

const initialState = {
    arr:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case IS_READEN: {
            return {
                ...state, 
                arr:[...state.arr, action.payload]
            };
        }
      
        default:
            return state;
    }
};