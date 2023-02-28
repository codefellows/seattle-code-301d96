import React from 'react';

class Cats extends React.Component {

  handleClick = (cat) => {
    this.props.onDelete(cat);
  }

  render() {
    return (
      <>
        {this.props.cats.length && this.props.cats.map((cat, idx) => (
          <div key={idx}>
            {cat.name} in {cat.location}
            <span onClick={() => this.handleClick(cat)}>[X]</span>
          </div>
        ))}
      </>
    )
  }
}

export default Cats;
