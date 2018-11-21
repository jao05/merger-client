// Reducer

//import * as actions from '../actions';

const initialState = {
    user: {
    		name: 'Example  User comp',
	        location: 'NYC' ,
	        industry: 'finacial',
	        profile: 'Loerm ipsum...'
    },

    companies: [
	    {
	        name: 'Example comp 1',
	        location: 'NYC' ,
	        industry: 'finacial',
	        profile: 'Loerm ipsum...'
	    },
	    {
	        name: 'Example comp 2',
	        location: 'LA' ,
	        industry: 'trucking',
	        profile: 'Loerm ipsum...'
	    },
	    {
	        name: 'Example comp 3',
	        location: 'CHI' ,
	        industry: 'legal',
	        profile: 'Loerm ipsum...'
	    }
    ]

};

export const mergerReducer = (state=initialState, action) => {
    
    return state;
};