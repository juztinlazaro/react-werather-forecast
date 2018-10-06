import { combineEpics } from 'redux-observable';
import * as BLOG from './blog/blog.epic';
import * as COUNTRIES from './countries/countries.epic';
import * as WEATHER from './weather/weather.epic';

const rootEpic = combineEpics(
  BLOG.getBlogEpic,
  COUNTRIES.getCountriesEpic,
  WEATHER.getWeatherEpic,
);

export default rootEpic;
