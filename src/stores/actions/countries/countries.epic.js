import { Observable } from 'rxjs';
import * as TYPES from './types';
import { jsonplacehoder } from 'Common/constants/api';
import * as ACTION from './countries.action';

const getCountriessUrl = 'https://restcountries.eu/rest/v2/name/';
export const getCountriesEpic = action$ =>
  action$.ofType(TYPES.GET_COUNTRIES_EPIC).switchMap(action => {
    const loading = Observable.of(ACTION.getCountriesLoading());

    const request = Observable.ajax
      .get(`${getCountriessUrl}${action.payload}`, '')
      .takeUntil(action$.ofType(TYPES.GET_COUNTRIES_CANCEL))
      .map(result => {
        return ACTION.getCountriesSuccess(result.response);
      })
      .catch(error => {
        return Observable.of(ACTION.getCountriesError(error));
      });

    return Observable.concat(loading, request);
  });
