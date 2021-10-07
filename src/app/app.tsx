import React, { Component } from 'react';
import './app.scss';
import Avatar from '../assets/images/avatar-chibi.jpg';
import { ReactComponent as Telephone } from '../assets/images/telephone.svg';
import { ReactComponent as Email } from '../assets/images/email.svg';
import { ReactComponent as Address } from '../assets/images/address.svg';

export class App extends Component {
  render() {
    return (
      <main className="app">
        <nav className="sidebar">
          <div className="avatar">
            <img src={Avatar} alt="" />
          </div>
          <div className="fullname">
            Bùi Văn Áo
          </div>
          <ul className="contract">
            <li className="item">
              <Telephone className="icon" />
              <div className="info"></div>
            </li>
            <li className="item">
              <Email className="icon" />
              <div className="info"></div>
            </li>
            <li className="item">
              <Address className="icon" />
              <div className="info"></div>
            </li>
          </ul>
        </nav>
        <aside className="main"></aside>
      </main>
    );
  }
}
