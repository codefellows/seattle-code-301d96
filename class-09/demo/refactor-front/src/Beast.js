import React from 'react';

class Beast extends React.Component {

  render() {
    return (
      <div onClick={this.props.handleClick}>
          <h2>{this.props.name}</h2>
          <span>likes: {this.props.votes}</span>
          <img src={this.props.image} />
      </div>
    )
  }
}

export default Beast;
