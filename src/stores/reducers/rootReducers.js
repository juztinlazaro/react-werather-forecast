import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducers';
import countriesReducer from './countries/countries.reducers';
import weatherReducer from './weather/weather.reducers';

const rootReducers = combineReducers({
  blogs: blogReducer,
  countries: countriesReducer,
  weather: weatherReducer,
});

export default rootReducers;
