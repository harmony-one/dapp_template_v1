import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://dev.harmony.one/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harmony One
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <img width="200" src={logo} className="App-logo" alt="logo" />
                <h1>Harmony One</h1>
                <h5>DApp Template_v1</h5>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://www.dappuniversity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forked from dappuniversity
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;