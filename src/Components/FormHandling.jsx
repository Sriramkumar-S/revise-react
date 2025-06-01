import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }

    // handleUserNameChange = (event) => {
    //     this.setState({
    //         userName: event.target.value
    //     })
    // }

    // handleCommentsChange = (event) => {
    //     this.setState({
    //         comments: event.target.value
    //     })
    // }

    // handleTopicsChange = (event) => {
    //     this.setState({
    //         topic: event.target.value
    //     })
    // }

    handleFormInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    }

    render() {
        const { userName, comments, topic } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" value={userName}
                        onChange={this.handleFormInputChange} />
                </div>
                <div>
                    <label htmlFor='comments'>Comments</label>
                    <textarea name="comments" id="comments" value={comments}
                        onChange={this.handleFormInputChange}></textarea>
                </div>
                <div>
                    <label htmlFor="topic">Topic</label>
                    <select name="topic" id="topic" value={topic} onChange={this.handleFormInputChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormHandling
