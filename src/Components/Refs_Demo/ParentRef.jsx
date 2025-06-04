import React, { Component } from 'react'
import ChildRef from './ChildRef'

class ParentRef extends Component {

    constructor(props) {
      super(props)
    
      this.childRef = React.createRef();
    }
    

    clickHandler = () => {
        this.childRef.current.focusInput();
    }

  render() {
    return (
      <div>
        <ChildRef ref={this.childRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentRef
