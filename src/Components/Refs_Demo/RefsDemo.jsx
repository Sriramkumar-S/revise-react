import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)

        //   1. Create Ref
        this.inputRef = React.createRef();

        // 2. callback Ref
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        //   1. Create Ref
        // this.inputRef.current.focus();
        //   2. Callback Ref
        this.cbRef.focus();
    }

    render() {
        return (
            <>
                {/* 1. Create Ref */}
                <input type="text" ref={this.inputRef} />
                {/* 2. callback Ref */}
                <input type="text" ref={this.setCbRef} />
            </>
        )
    }
}

export default RefsDemo
