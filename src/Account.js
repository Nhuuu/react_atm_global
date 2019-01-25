import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      error: ''
    }
    // this.handleDepositClick = this.handleDepositClick.bind(this)
  }

  handleDepositClick = (e) => {
    e.preventDefault();
    let amount = +this.refs.amount.value;
    let newBalance = this.state.balance + amount;
    if (isNaN(this.refs.amount.value) || this.refs.amount.value < 0) {
      this.setState({ error: 'Please enter a valid amount!', amount: ''})
    }
    else {
      this.setState({
        balance: newBalance,
        error: ''
      })
      this.refs.amount.value = '';
    }
  }

  handleWithdrawClick = (e) => {
    e.preventDefault();
    let amount = +this.refs.amount.value;
    let newBalance = this.state.balance - amount;
    if(amount > this.state.balance || amount < 0 ){
      this.setState({ error: 'Please enter a valid amount!', amount: ''})
    }
    else {
      this.setState({
        balance: newBalance,
        error: ''        
      })
      this.refs.amount.value = '';
    }
  }



  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <p className="red">{this.state.error}</p>
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}
