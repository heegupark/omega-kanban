import React, { Component } from 'react';
import IndexPage from '../components/index-page';
import Main from '../components/main';

export default class extends Component {
  render() {
    return (
      <>
        <IndexPage />
        <Main />
      </>
    );
  }
}
