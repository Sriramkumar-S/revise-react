import React, { Component } from 'react'

class CounterRenderProps extends Component {
  render() {
    const {count, increamentCount} = this.props;
    return (
      <div>
        <button onClick={increamentCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default CounterRenderProps
