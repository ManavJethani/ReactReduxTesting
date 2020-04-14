import React, { Component } from 'react';

export default class CommentBox extends Component {

    state = {
        comment: ''
    }
    handleText = (e) => {
        this.setState({ comment: e.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ comment: '' })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleText}
                >
                </textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}
