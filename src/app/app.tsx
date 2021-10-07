import React, { Component } from 'react';
import './app.scss';

import { Sidebar } from './layout/sidebar/sidebar';
import { Main } from './layout/main/main';
export class App extends Component {
  render() {
    return (
      <main className="app">
        <Sidebar />
        <Main />
      </main>
    );
  }
}
