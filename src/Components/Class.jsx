import React, { Component } from 'react'

class Class extends Component {
    render() {
        const { name, heroName } = this.props;
        // const { state1, state2 } = this.state;
        return (
            <>
                {/* <h1>This is from a class Component</h1> */}
                {/* <h3>Hi {this.props.name} a.k.a {this.props.heroName}</h3> */}
                <h3>Hi {name} a.k.a {heroName}</h3>
                {this.props.children}
            </>
        )
    }
}
export default Class;