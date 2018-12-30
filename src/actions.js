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
    companies: companies.companies
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
    companies: companies.companies
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
    companies: companies.companies
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
    companies: companies.companies
});


// 4c. Fetch Expert Error
export const FETCH_EXPERT_COMPANIES_ERROR = 'FETCH_EXPERT_COMPANIES_ERROR';
export const fetchExpertCompaniesError = errMsg => ({
    type: FETCH_EXPERT_COMPANIES_ERROR,
    errMsg
});


// 5. Clear Search Companies after querying and displaying results
export const CLEAR_SEARCH_COMPANIES = 'CLEAR_SEARCH_COMPANIES';
export const clearSearchCompanies = () => ({
    type: CLEAR_SEARCH_COMPANIES,
    mergerCompanies: [],
    acquistionCompanies: [],
    sellCompanies: []
});






// #a. Add userCompany********************************************
export const createUserCompanyRequest = (signUpData) => dispatch => {
    fetch(`${"http://localhost:8000"}/userCompany`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpData)
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(userCompany => {
        console.log(userCompany); // **************************
        dispatch(addUserCompanySuccess(userCompany));
    })
    .catch(err => {
        dispatch(addUserCompanyError(err));
    });
};

export const ADD_USER_COMPANY_SUCCESS = 'ADD_USER_COMPANY_SUCCESS';
export const addUserCompanySuccess = user => ({
    type: ADD_USER_COMPANY_SUCCESS,
    user
});

export const ADD_USER_COMPANY_ERROR = 'ADD_USER_COMPANY_ERROR';
export const addUserCompanyError = user => ({
    type: ADD_USER_COMPANY_ERROR,
    user
});

export const SIGN_USER_OUT = 'SIGN_USER_OUT';
export const signUserOut = () => ({
    type: SIGN_USER_OUT,
    user: null
});



export const fetchUserForSignIn = (signInData) => dispatch => {
    fetch(`${"http://localhost:8000"}/userCompany/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signInData)
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(userCompany => {
        console.log(userCompany); // **************************
        dispatch(signUserIn(userCompany));
    })
    .catch(err => {
        console.log(err);  // *******************      
        dispatch(signUserInError('invalid login'));
    });
};

export const SIGN_USER_IN = 'SIGN_USER_IN';
export const signUserIn = (user) => ({
    type: SIGN_USER_IN,
    user
});

export const SIGN_USER_IN_ERROR = 'SIGN_USER_IN_ERROR';
export const signUserInError = error => ({
    type: SIGN_USER_IN_ERROR,
    error
});

// #b. Update userCompany
export const UPDATE_USER_COMPANY = 'UPDATE_USER_COMPANY';
export const updateUserCompany = user => ({
    type: UPDATE_USER_COMPANY,
    user
});


// #c. Delete userCompany
export const DELETE_USER_COMPANY = 'DELETE_USER_COMPANY';
export const deleteUserCompany = company => ({
    type: DELETE_USER_COMPANY,
    company
});