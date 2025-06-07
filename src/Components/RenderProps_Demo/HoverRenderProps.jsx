import React, { Component } from 'react'

class HoverRenderProps extends Component {
  render() {
    const {count, increamentCount} = this.props;
    return (
      <div>
        <div onMouseOver={increamentCount}>Hovered {count} times</div>
      </div>
    )
  }
}

export default HoverRenderProps
