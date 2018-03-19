import { GET_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData
};

const countriesReducer = function (state = {}, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, { countries: action.data })
        default:
    }

    return state;
};

export default countriesReducer;