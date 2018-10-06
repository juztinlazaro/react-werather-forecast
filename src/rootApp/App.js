import React, { Component } from "react";

import Layout from "../hoc/Layout/Layout";
import Routes from "./routes/routes";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes />
        </Layout>
      </div>
    );
  }
}

export default App;
