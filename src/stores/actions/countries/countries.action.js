import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getCountriesEpic = createAction(TYPES.GET_COUNTRIES_EPIC);
export const getCountriesLoading = createAction(TYPES.GET_COUNTRIES_LOADING);
export const getCountriesSuccess = createAction(TYPES.GET_COUNTRIES_SUCCESS);
export const getCountriesError = createAction(TYPES.GET_COUNTRIES_ERROR);
export const getCountriesCancel = createAction(TYPES.GET_COUNTRIES_CANCEL);

export const selectCountry = createAction(TYPES.SELECT_COUNTRY);
