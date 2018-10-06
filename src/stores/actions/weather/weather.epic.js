import { Observable } from 'rxjs';
import * as TYPES from './types';
import { jsonplacehoder } from 'Common/constants/api';
import * as ACTION from './weather.action';
import { headers } from 'Common/constants/headers';
import { ajax } from 'rxjs/observable/dom/ajax';

const API_KEY = '54755288beb8212b2fd9e7ca2b7399bf';
const getWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const getWeatherEpic = action$ =>
  action$.ofType(TYPES.GET_WEATHER_EPIC).switchMap(action => {
    const loading = Observable.of(ACTION.getWeatherLoading());

    const request = ajax({
      url: `${getWeatherUrl}&q=${
        action.payload.city
      },${action.payload.country.toLowerCase()}`,
      method: 'GET',
      crossDomain: true,
      createXHR: function() {
        return new XMLHttpRequest();
      },
    })
      .takeUntil(action$.ofType(TYPES.GET_WEATHER_CANCEL))
      .map(result => {
        return ACTION.getWeatherSuccess(result.response);
      })
      .catch(error => {
        return Observable.of(ACTION.getWeatherError(error));
      });

    return Observable.concat(loading, request);
  });
