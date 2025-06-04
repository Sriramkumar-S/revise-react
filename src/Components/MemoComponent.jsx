import React, { Component } from 'react'

class MemoComponent extends Component {
  render() {
    console.log("Memo component Rendered")
    return (
      <>
        <div>Memo component {this.props.name}</div>
      </>
    )
  }
}

export default React.memo(MemoComponent)
