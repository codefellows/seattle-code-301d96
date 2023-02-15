import React from 'react';
import BankAccount from './BankAccount';

class Bank extends React.Component {
  constructor() {
    super();
    this.state = {
      totalMoney: 10000,
    }
  }

  // decrement this.state.totalMoney, only if we are able
  deposit = (number) => {
    let newTotal = this.state.totalMoney - number;

    // update the state if we can.
    if (newTotal < 0) {
      alert('Not enough cash in the bank');
    } else {
      this.setState({ totalMoney: newTotal });
      return number;
    }
  }

  render() {
    return (
      <main>
        <h2>Bank Of Jacob</h2>
        <p>Money in the Bank: {this.state.totalMoney}</p>
        <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row' }}>
          <BankAccount name="JB" deposit={this.deposit}/>
          <BankAccount name="Adam" deposit={this.deposit} />
        </div>
      </main>
    )
  }
}

export default Bank;
