import { handleActions } from 'redux-actions';
import * as ACTION from 'Actions/weather/weather.action';
import city from './weather.helper';
import Model from './model';

export default handleActions(
  {
    [ACTION.getWeatherSuccess]: (state, action) => {
      if (!city(state, action.payload)) {
        return {
          ...state,
          weather: [action.payload, ...state.weather],
          loading: false,
          success: true,
          error: false,
        };
      }

      return {
        ...state,
        success: true,
        loading: false,
        error: false,
      };
    },
    [ACTION.getWeatherLoading]: (state, action) => ({
      ...state,
      loading: true,
      success: false,
      error: false,
    }),
    [ACTION.getWeatherError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
      error: true,
      success: false,
    }),
    [ACTION.getWeatherCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
  },
  Model,
);
