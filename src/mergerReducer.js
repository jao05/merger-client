// Reducer

import * as actions from './actions';

const initialState = {

    user: null,
    companies: null
};

export const mergerReducer = (state=initialState, action) => {
    
    
    if (action.type === actions.FETCH_MERGER_COMPANIES_SUCCESS) {
        return Object.assign({}, state, {
            companies: action.companies
        });
    }

    /*
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }
    */


    if (action.type === actions.ADD_USER_COMPANY) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === actions.UPDATE_USER_COMPANY) {
        return Object.assign({}, state, {
            
        });
    }


    if (action.type === actions.DELETE_USER_COMPANY) {
        return Object.assign({}, state, {
            
        });
    }    

    return state;
};