import React, { Component } from 'react'
import NormalComponents from './NormalComponents'
import PureComponents from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Tony stark'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Tony stark'
      })
    }, 2000)
  }

  render() {
    console.log('**********************Parent component Rendered**********************')

    return (
      <>
        <div>Parent component</div>
        <MemoComponent name={this.state.name}/>
        {/* <NormalComponents name={this.state.name} /> */}
        {/* <PureComponents name={this.state.name} /> */}

      </>
    )
  }
}

export default ParentComponent
