import React, { Component } from 'react'
import NormalComponents from './NormalComponents'
import PureComponents from './PureComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Tony stark'
        }
      }
  
    render() {    
    console.log('Parent component Rendered')
    setInterval( () => {
        this.setState({
            name: 'Tony stark'
        })
    }, 2000)
    return (
      <>
        <div>Parent component</div>
        <NormalComponents name={this.state.name}/>
        <PureComponents name={this.state.name}/>
        
      </>
    )
  }
}

export default ParentComponent
