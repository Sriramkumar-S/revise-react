import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tony Stark'
        }
        console.log('Lifecylce B constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecylce B getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }
    
    shouldComponentUpdate() {
        console.log('Lifecycle B shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle B getSnapshotBeforeupdate')
        return null;
    }

    componentDidUpdate() {
        console.log('Lifecycle B componentDidUpdate')
    }

    render() {
        console.log('Lifecycle B Render')
        return (
            <div>
                <div>Lifecycle B</div>

            </div>
        )
    }
}

export default LifecycleB
