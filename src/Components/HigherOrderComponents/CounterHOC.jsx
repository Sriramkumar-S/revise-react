import React, { Component } from 'react'
import withCounter from './WithCounter';
class CounterHOC extends Component {
 
  render() {
    const {count, clickHandler} = this.props;
    return (
      <div>
        <button onClick={clickHandler}>{this.props.name} Clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(CounterHOC, 10)
