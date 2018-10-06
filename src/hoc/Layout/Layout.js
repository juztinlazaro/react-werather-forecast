import React, { Component } from 'react';

import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <section className="Layout-section">
        <Header />
        <main className="content-section">{this.props.children}</main>
        <Footer />
      </section>
    );
  }
}

export default Layout;
