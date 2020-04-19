import React, { Component } from 'react';
import { connect } from 'react-redux';



class CommentList extends Component {
  renderComment() {
    return this.props.comment.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }
  render() {
    return (
      <div><ul>
        {this.renderComment()}
      </ul></div>
    );
  }
}

function mapStateToProps(state) {
  return { comment: state.CommentReducer }
}

export default connect(mapStateToProps)(CommentList)
