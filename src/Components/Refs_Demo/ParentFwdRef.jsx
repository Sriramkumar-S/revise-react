import React, { Component } from 'react'
import ChildFwdRef from './ChildFwdRef'

class ParentFwdRef extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
        <ChildFwdRef ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentFwdRef
