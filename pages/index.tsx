import React, { Component } from 'react';
import Main from '../components/main';
import IndexPage from '../components/index-page';

export default class extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <IndexPage />
        <Main />
      </>
    );
  }
}
