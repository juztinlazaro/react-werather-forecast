import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getWeatherEpic = createAction(TYPES.GET_WEATHER_EPIC);
export const getWeatherLoading = createAction(TYPES.GET_WEATHER_LOADING);
export const getWeatherSuccess = createAction(TYPES.GET_WEATHER_SUCCESS);
export const getWeatherError = createAction(TYPES.GET_WEATHER_ERROR);
export const getWeatherCancel = createAction(TYPES.GET_WEATHER_CANCEL);
