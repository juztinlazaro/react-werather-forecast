import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';

import { getBlogEpic, getBlogCancel } from 'Actions/blog/blog.action';

class Test extends Component {
  componentWillUnmount() {
    if (this.props.loading) {
      this.props.getBlogCancel();
    }
  }

  onGetPost = () => {
    this.props.getBlogEpic();
  };

  render() {
    return (
      <section className="Test-section">
        <h3>Yow! im a test component and route</h3>

        <Button type="primary" onClick={this.onGetPost}>
          Im a testing antd button
        </Button>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blogs.blogs,
    loading: state.blogs.loading,
  };
};

export default connect(
  mapStateToProps,
  {
    getBlogEpic,
    getBlogCancel,
  },
)(Test);
