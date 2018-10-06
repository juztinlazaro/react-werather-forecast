import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './Filters';
import WeatherList from './WeatherList';
import {
  getCountriesEpic,
  selectCountry,
} from 'Actions/countries/countries.action';
import { getWeatherEpic } from 'Actions/weather/weather.action';
import Loading from 'Components/Loading/FullWidthLoading/FullWidthLoading';

class Home extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  state = {
    selectedCountry: {},
    selectedCity: '',
  };

  handleSearchCountry = value => {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.getCountriesEpic(value);
    }, 700);
  };

  handleGetCity = e => {
    clearTimeout(this.timeout);
    const value = e.target.value;

    this.timeout = setTimeout(() => {
      this.setState({
        selectedCity: value,
      });
      if (value !== '') {
        this.props.getWeatherEpic({
          country: this.state.selectedCountry.alpha2Code,
          city: value,
        });
      }
    }, 700);
  };

  handleSelectCountry = (value, option) => {
    this.setState({
      selectedCountry: option.props.data,
    });
    this.props.selectCountry(option.props.data);
  };

  render() {
    const { countryData } = this.props;
    const { selectedCountry, selectedCity } = this.state;

    return (
      <section className="Home-section">
        {this.props.loading && <Loading />}
        <Filters
          onSearchCountry={this.handleSearchCountry}
          onGetCity={this.handleGetCity}
          onSelectCountry={this.handleSelectCountry}
          countries={countryData.countries}
          loading={countryData.loading}
          allowCity={selectedCountry.name === undefined}
        />

        <div>
          <h4>
            Search Weather forecast to:{' '}
            {selectedCountry.name !== undefined
              ? selectedCountry.name
              : 'Please select country'}
            ,{' '}
            {selectedCity !== ''
              ? `${selectedCity} City`
              : 'Please select country'}
          </h4>
        </div>

        <WeatherList />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    countryData: state.countries,
    loading: state.weather.loading,
  };
};

export default connect(
  mapStateToProps,
  { getCountriesEpic, selectCountry, getWeatherEpic },
)(Home);
