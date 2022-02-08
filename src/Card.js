import React, { Component } from 'react';


class Card extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {
    return (
      <div className="Card">
        <h1>{this.props.Heading}</h1>
       <p>{this.props.para}</p>
      </div>
    );
  }
}

export default Card;