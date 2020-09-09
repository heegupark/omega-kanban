import React, { Component } from 'react';
import IndexPage from '../components/index-page';
import Main from './main';

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
