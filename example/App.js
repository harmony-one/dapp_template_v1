import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { abi } from "../abis/Counter.json"
import Web3 from 'web3';


var web3 = new Web3(Web3.givenProvider || 'ws://localhost:9500');


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      address: null,
      depositValue: 0.1,
      balance: 0
    };
    let contractAdress = //INSERT YOUR CONTRACT ADDRESS
      this.contract = new web3.eth.Contract(abi, contractAdress);

    // React event callbacks must be binded to this!
    this.connect = this.connect.bind(this)
    this.deposit = this.deposit.bind(this)
    this.withdraw = this.withdraw.bind(this)
  }

  componentDidMount() {
    this.updateBalance()
  }

  async deposit() {
    let weiValue = web3.utils.toWei(this.state.depositValue.toString())
    console.log(weiValue)
    this.contract.methods.deposit().send({
      from: this.state.address,
      value: weiValue
    }).then(() => {
      this.updateBalance()
    }).catch(console.error)
  }

  async withdraw() {
    this.contract.methods.withdraw().send({
      from: this.state.address
    }).then(() => {
      this.updateBalance()
    }).catch(console.error)
  }

  async updateBalance() {
    this.contract.methods.getMoneyStored().call().then((balance) => {
      this.setState({
        balance
      })
    }).catch(console.error)
  }

  async connect() {
    let accounts = await window.ethereum.enable()

    this.setState({
      address: accounts[0]
    })
  }

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
                <h2>DApp Template_v1</h2>
                {
                  !this.state.address && <button onClick={this.connect}>Connect</button>
                }
                {
                  this.state.address &&


                  <div>
                    <span>{this.state.address}</span>
                    <h3>Balance</h3>
                    <div>
                      <input value={web3.utils.fromWei(this.state.balance)} readOnly></input>
                      <button onClick={this.withdraw}>
                        Withdraw
                      </button>
                    </div>

                    <div>
                      <input type="number" value={this.state.depositValue} onChange={(evt) => this.setState({ depositValue: evt.target.value })} step="0.1"></input>
                      <button onClick={this.deposit}>
                        Deposit
                      </button>
                    </div>
                  </div>
                }
                <div>
                  <a
                    className="App-link"
                    href="https://www.dappuniversity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Forked from dappuniversity
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;