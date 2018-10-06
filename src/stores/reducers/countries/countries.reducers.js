import { handleActions } from 'redux-actions';
import * as ACTION from 'Actions/countries/countries.action';
import Model from './model';

export default handleActions(
  {
    [ACTION.getCountriesSuccess]: (state, action) => ({
      ...state,
      countries: action.payload,
      loading: false,
    }),
    [ACTION.getCountriesLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.getCountriesError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.getCountriesCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
    [ACTION.selectCountry]: (state, action) => ({
      ...state,
      selectedCountry: action.payload,
    }),
  },
  Model,
);
