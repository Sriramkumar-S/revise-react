import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    // Approach 1 - Using if else
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Sriram</div>
    // }else {
    //     return <div>Welcome Guest</div>
    // }

    // Approach 2 - Using Element variables
    // let message;
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Sriram</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return message;

    // Approach 3 - Using Ternary operator
    // return (
    //     this.state.isLoggedIn ? 
    //     <div>Welcome Sriram</div> :
    //     <div>Welcome Guest</div>
    // )

    // Approach 4 - Using Shortcircuiting approach
    return (
        this.state.isLoggedIn && <div>Welcome Sriram</div>
    )
  }
}

export default ConditionalRendering
