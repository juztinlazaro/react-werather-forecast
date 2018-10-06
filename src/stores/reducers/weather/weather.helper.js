export default function(state, data) {
  const result = state.weather.some(item => data.city.id === item.city.id);
  return result;
}
