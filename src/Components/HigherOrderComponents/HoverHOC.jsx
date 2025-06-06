import React, { Component } from 'react'
import withCounter from './WithCounter';

class HoverHOC extends Component {

  render() {
    const {count, clickHandler} = this.props;
    return (
      <div>
        <h3 onMouseOver={clickHandler}>Hovered {count} times</h3>
      </div>
    )
  }
}

export default withCounter(HoverHOC, 20)
