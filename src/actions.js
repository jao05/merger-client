import {API_BASE_URL} from './config';


// 1a. Action creator to fetch companies interested in merging (async)
export const fetchMergerCompanies = (industry, location) => dispatch => {
    fetch(`${"http://localhost:8000"}/userCompany/${industry}/${location}/merger`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(companies => {
        console.log(companies); // **************************
        dispatch(fetchMergerCompaniesSuccess(companies));
    })
    .catch(err => {
        dispatch(fetchMergerCompaniesError(err));
    });
};


// 1b. Fetch Merger Success
export const FETCH_MERGER_COMPANIES_SUCCESS = 'FETCH_MERGER_COMPANIES_SUCCESS';
export const fetchMergerCompaniesSuccess = companies => ({
    type: FETCH_MERGER_COMPANIES_SUCCESS,
    companies
});


// 1c. Fetch Merger Error
export const FETCH_MERGER_COMPANIES_ERROR = 'FETCH_MERGER_COMPANIES_ERROR';
export const fetchMergerCompaniesError = errMsg => ({
    type: FETCH_MERGER_COMPANIES_ERROR,
    errMsg
});


// 2a. Action creator to fetch companies interested in being acquired (async)
export const fetchAcquisitionCompanies = (industry, location) => dispatch => {
    fetch(`${"http://localhost:8000"}/userCompany/${industry}/${location}/acquisition`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(companies => {
        console.log(companies); // **************************
        dispatch(fetchAcquisitionCompaniesSuccess(companies));
    })
    .catch(err => {
        dispatch(fetchAcquisitionCompaniesError(err));
    });
};


// 2b. Fetch Acquisition Success
export const FETCH_ACQUISITION_COMPANIES_SUCCESS = 'FETCH_ACQUISITION_COMPANIES_SUCCESS';
export const fetchAcquisitionCompaniesSuccess = companies => ({
    type: FETCH_ACQUISITION_COMPANIES_SUCCESS,
    companies
});


// 2c. Fetch Acquisition Error
export const FETCH_ACQUISITION_COMPANIES_ERROR = 'FETCH_ACQUISITION_COMPANIES_ERROR';
export const fetchAcquisitionCompaniesError = errMsg => ({
    type: FETCH_ACQUISITION_COMPANIES_ERROR,
    errMsg
});


// 3a. Action creator to fetch companies interested in buying other companies (async)
export const fetchSellCompanies = (industry, location) => dispatch => {
    fetch(`${"http://localhost:8000"}/userCompany/${industry}/${location}/sell`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(companies => {
        console.log(companies); // **************************
        dispatch(fetchSellCompaniesSuccess(companies));
    })
    .catch(err => {
        dispatch(fetchSellCompaniesError(err));
    });
};


// 3b. Fetch Sell Success
export const FETCH_SELL_COMPANIES_SUCCESS = 'FETCH_SELL_COMPANIES_SUCCESS';
export const fetchSellCompaniesSuccess = companies => ({
    type: FETCH_SELL_COMPANIES_SUCCESS,
    companies
});


// 3c. Fetch Sell Error
export const FETCH_SELL_COMPANIES_ERROR = 'FETCH_SELL_COMPANIES_ERROR';
export const fetchSellCompaniesError = errMsg => ({
    type: FETCH_SELL_COMPANIES_ERROR,
    errMsg
});


// 4a. Action creator to fetch expert companies
export const fetchExpertCompanies = (type, location) => dispatch => {
    fetch(`${"http://localhost:8000"}/experts/${type}/${location}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(companies => {
        console.log(companies); // **************************
        dispatch(fetchExpertCompaniesSuccess(companies));
    })
    .catch(err => {
        dispatch(fetchExpertCompaniesError(err));
    });
};


// 4b. Fetch Expert Success
export const FETCH_EXPERT_COMPANIES_SUCCESS = 'FETCH_EXPERT_COMPANIES_SUCCESS';
export const fetchExpertCompaniesSuccess = companies => ({
    type: FETCH_EXPERT_COMPANIES_SUCCESS,
    companies
});


// 4c. Fetch Expert Error
export const FETCH_EXPERT_COMPANIES_ERROR = 'FETCH_EXPERT_COMPANIES_ERROR';
export const fetchExpertCompaniesError = errMsg => ({
    type: FETCH_EXPERT_COMPANIES_ERROR,
    errMsg
});


// 5. Clear Search Companies
export const CLEAR_SEARCH_COMPANIES = 'CLEAR_SEARCH_COMPANIES';
export const clearSearchCompanies = () => ({
    type: CLEAR_SEARCH_COMPANIES,
    companies: []
});








// #a. Add userCompany********************************************
export const ADD_USER_COMPANY = 'ADD_USER_COMPANY';
export const addUserCompany = company => ({
    type: ADD_USER_COMPANY,
    company
});


// #b. Update userCompany
export const UPDATE_USER_COMPANY = 'UPDATE_USER_COMPANY';
export const updateUserCompany = company => ({
    type: UPDATE_USER_COMPANY,
    company
});


// #c. Delete userCompany
export const DELETE_USER_COMPANY = 'DELETE_USER_COMPANY';
export const deleteUserCompany = company => ({
    type: DELETE_USER_COMPANY,
    company
});