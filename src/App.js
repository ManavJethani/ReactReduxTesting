import React from 'react';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';

class App extends React.Component {
  render() {
    return (
      <div style={{padding:20}}>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
};


export default App