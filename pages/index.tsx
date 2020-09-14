import React, { Component } from 'react';
import Main from '../components/main';
import IndexPage from '../components/index-page';
import { SnackbarProvider } from 'notistack';

export default class extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SnackbarProvider maxSnack={3}>
        <IndexPage />
        <Main />
      </SnackbarProvider>
    );
  }
}
