import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class Header extends Component {
  render() {
    return (
      <section className="Header-section">
        <Row>
          <Col md={12}>
            <h2 className="_text-primary"> WEATHER FORECAST </h2>
          </Col>

          <Col md={12}>
            <div className="_float-right">
              <span
                className={`flag-icon flag-icon-${
                  this.props.flag !== undefined
                    ? this.props.flag.toLowerCase()
                    : 'ph'
                }`}
              />
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    flag: state.countries.selectedCountry.alpha2Code,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Header);
