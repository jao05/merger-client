// Reducer

import * as actions from './actions';

const initialState = {

    user: null,
    mergerCompanies: [],
    acquisitionCompanies: [],
    sellCompanies: [],
    expertCompanies: []
};

export const mergerReducer = (state=initialState, action) => {
    
    
    if (action.type === actions.FETCH_MERGER_COMPANIES_SUCCESS) {
        return Object.assign({}, state, {
            mergerCompanies: action.companies
        });
    }

    
    if (action.type === actions.FETCH_ACQUISITION_COMPANIES_SUCCESS) {
        return Object.assign({}, state, {
            acquisitionCompanies: action.companies
        });
    }

    
    if (action.type === actions.FETCH_SELL_COMPANIES_SUCCESS) {
        return Object.assign({}, state, {
           sellCompanies: action.companies 
        });
    }

    
    if (action.type === actions.FETCH_EXPERT_COMPANIES_SUCCESS) {
        return Object.assign({}, state, {
           expertCompanies: action.companies  
        });
    }

    if (action.type === actions.CLEAR_SEARCH_COMPANIES) { 
        return Object.assign({}, state, { 
            mergerCompanies: [],
            acquisitionCompanies: [],
            sellCompanies: [],
            expertCompanies: []
        }); 
    }

    /*
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            
        });
    }    
    */


    /*******DEAL WITH SIGN-IN & SIGN-UP ******************/
    if (action.type === actions.SIGN_USER_OUT) {
        return Object.assign({}, state, {
            user: action.user
        });
    }

    if (action.type === actions.ADD_USER_COMPANY_SUCCESS) {
        return Object.assign({}, state, {
           user: action.user 
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