import {API_BASE_URL} from '../config';

// 1. Update profile


// 2a. Action creator to fetch companies interested in merging (async)
export const fetchMergerCompanies = () => dispatch => {
    fetch(`${API_BASE_URL}/userCompany`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(companies => {
        dispatch(fetchMergerCompaniesSuccess(companies));
    })
    .catch(err => {
        dispatch(fetchMergerCompaniesError(err));
    });
};


// 2b. Fetch Merger Success
export const FETCH_MERGER_COMPANIES_SUCCESS = 'FETCH_MERGER_COMPANIES_SUCCESS';
export const fetchMergerCompaniesSuccess = companies => ({
    type: FETCH_MERGER_COMPANIES_SUCCESS,
    companies
});


// 2c. Fetch Merger Error
export const FETCH_MERGER_COMPANIES_ERROR = 'FETCH_MERGER_COMPANIES_ERROR';
export const fetchMergerCompaniesError = errMsg => ({
    type: FETCH_MERGER_COMPANIES_ERROR,
    errMsg
});


// 3a. Action creator to fetch companies interested in being acquired (async)
export const fetchAcquisitionCompanies = () => dispatch => {
    fetch(`${API_BASE_URL}/userCompany`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(companies => {
        dispatch(fetchAcquisitionCompaniesSuccess(companies));
    })
    .catch(err => {
        dispatch(fetchAcquisitionCompaniesError(err));
    });
};


// 3b. Fetch Acquistion Success
export const FETCH_ACQUISITION_COMPANIES_SUCCESS = 'FETCH_ACQUISITION_COMPANIES_SUCCESS';
export const fetchAcquisitionCompaniesSuccess = companies => ({
    type: FETCH_ACQUISITION_COMPANIES_SUCCESS,
    companies
});


// 3c. Fetch Acquistion Error
export const FETCH_ACQUISITION_COMPANIES_ERROR = 'FETCH_ACQUISITION_COMPANIES_ERROR';
export const fetchAcquisitionCompaniesError = errMsg => ({
    type: FETCH_ACQUISITION_COMPANIES_ERROR,
    errMsg
});

/*
// 4. Action creator to fetch companies interested in buying other companies (async)
export const fetchBoard = () => dispatch => {
    fetch(`${API_BASE_URL}/board`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(board => {
        dispatch(fetchBoardSuccess(board));
    });
};
*/