import React from 'react';

class BankAccount extends React.Component {
  constructor() {
    super();
    this.state={
      accountTotal: 0,
    }
  }

  handleClick = () => {
    // this function must be passed in from a parent.
    let money = this.props.deposit(500);
    if (money) {
      this.setState({ accountTotal: this.state.accountTotal + money});
    }
  }

  render() {
    return(
      <section style={{ margin: '16px'}}>
        <h3>{this.props.name}</h3>
        <p>Money in account: {this.state.accountTotal}</p>
        <button onClick={this.handleClick}>Ask For Money</button>
      </section>
    )
  }
}

export default BankAccount;
