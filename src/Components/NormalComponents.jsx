import React, { Component } from 'react'

class NormalComponents extends Component {
  render() {
    console.log('Normal component Rendered')
    return (
      <>
        <div>Normal Component {this.props.name}</div>
      </>
    )
  }
}

export default NormalComponents
