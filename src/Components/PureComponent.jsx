import React, { Component, PureComponent } from 'react'

class PureComponents extends PureComponent {
  render() {
    console.log('Pure component Rendered')
    return (
      <>
        <div>Pure component</div>
      </>
    )
  }
}

export default PureComponents
