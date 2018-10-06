import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'Components/Chart';
import GoogleMap from 'Components/GoogleMap';
import Notification from 'antd/lib/notification';
import PlainSlate from 'ubidy_ui_kit/lib/Slate/PlainSlate';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td>
          {cityData.city.name}
          <GoogleMap lat={lat} lon={lon} />{' '}
        </td>
        <td>
          {' '}
          <Chart data={temps} color="orange" units="K" />{' '}
        </td>
        <td>
          {' '}
          <Chart data={pressure} color="pink" units="hPa" />{' '}
        </td>
        <td>
          {' '}
          <Chart data={humidity} color="blue" units="%" />{' '}
        </td>
      </tr>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weather.success) {
      Notification.success({
        message: 'Weather Forecast',
        description: 'New location is addded!',
        placement: 'bottomRight',
      });
    }

    if (nextProps.weather.error) {
      Notification.error({
        message: 'Weather Forecast Fail',
        description:
          'Something went wrong, please check your location or please try again later',
        placement: 'bottomRight',
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.weather.weather.length !== 0 ? (
          <table className="table-ui">
            <thead>
              <tr>
                <th> City </th>
                <th> Temperature (K) </th>
                <th> Pressure (hPa) </th>
                <th> Humidity (%) </th>
              </tr>
            </thead>
            <tbody>{this.props.weather.weather.map(this.renderWeather)}</tbody>
          </table>
        ) : (
          <PlainSlate
            icon="heat-map"
            description="No location selected"
            border="dashed"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};

export default connect(
  mapStateToProps,
  null,
)(WeatherList);
